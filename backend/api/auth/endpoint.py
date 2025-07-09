from flask import Blueprint, request, jsonify, current_app as app
from werkzeug.security import generate_password_hash, check_password_hash
from database.database import get_connection
import jwt
import datetime
from functools import wraps

auth_endpoint = Blueprint('auth', __name__)

# Middleware to protect routes with JWT
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM users WHERE email = %s", (data['email'],))
            current_user = cursor.fetchone()
            cursor.close()
            conn.close()
            if not current_user:
                return jsonify({'message': 'User not found!'}), 401
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

# ✅ User Registration
@auth_endpoint.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    required_fields = ['username', 'email', 'name', 'password']
    if not all(field in data for field in required_fields):
        return jsonify({'message': 'All fields (username, email, name, password) are required!'}), 400

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    # Check if username or email already exists
    cursor.execute("SELECT * FROM users WHERE username = %s OR email = %s", (data['username'], data['email']))
    if cursor.fetchone():
        return jsonify({'message': 'Username or email already exists!'}), 400

    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')

    cursor.execute(
        "INSERT INTO users (username, email, name, password) VALUES (%s, %s, %s, %s)",
        (data['username'], data['email'], data['name'], hashed_password)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'User registered successfully!'}), 201

# ✅ User Login
@auth_endpoint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Username and password required!'}), 400

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE username = %s", (data['username'],))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Invalid credentials!'}), 401

    token = jwt.encode({
        'email': user['email'],
        'username': user['username'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }, app.config['SECRET_KEY'])

    return jsonify({
        'token': token,
        'username': user['username']
    }), 200
