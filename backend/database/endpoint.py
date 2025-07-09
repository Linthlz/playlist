from flask import Blueprint, jsonify
from database.database import get_connection
import mysql.connector

database_endpoints = Blueprint('database_endpoints', __name__)

@database_endpoints.route('/connection', methods=['GET'])
def connection():
    try:
        conn = get_connection()
        conn.close()
        return jsonify({"status": "Connection successful"}), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
