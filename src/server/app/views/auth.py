from flask import jsonify, request
from app import app
from data.firebase import verifyIdToken


@app.route('/api/auth')
def auth():
    return "Seriosly! What are you looking for? ;)"


@app.route('/api/auth/get_user_uid_from_session', methods=["POST"])
def get_user_uid_from_session():
    try:
        session_id = request.form["session_id"]
        decoded_token = verifyIdToken(session_id)
        uid = decoded_token['uid']
        return uid
    except Exception as e:
        return str(e), 400  # 400 = Bad Request
