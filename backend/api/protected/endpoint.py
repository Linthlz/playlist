from flask import Blueprint, jsonify
from api.auth.endpoint import token_required  # Only need token_required
from database.database import get_connection

protected_data_endpoint = Blueprint('protected_data', __name__)

@protected_data_endpoint.route('/user', methods=['GET'])
@token_required
def user_data(current_user):
    return jsonify({
        'message': f'Hello {current_user["email"]}! This is protected user data.',
        'user': current_user
    }), 200
