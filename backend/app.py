from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
import os
import jwt  # Optional for token generation if using custom JWT

from database.database import get_connection
from api.auth.endpoint import auth_endpoint
from api.playlist.endpoint import playlist_endpoints
from api.protected.endpoint import protected_data_endpoint

load_dotenv()

app = Flask(__name__)
CORS(app)

# Set the secret key for JWT encoding/decoding
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')  # e.g. in .env: SECRET_KEY=your_secret

# Register blueprints
app.register_blueprint(auth_endpoint, url_prefix='/api/auth')
app.register_blueprint(playlist_endpoints, url_prefix='/api/playlist')
app.register_blueprint(protected_data_endpoint, url_prefix='/api/protected')

@app.route('/')
def home():
    return 'Welcome to the API!'
