from flask import request
from app import app
from app.data.firebase import Firebase


@app.route('/api/auth')
def auth():
    return "Seriosly! What are you looking for? ;)"


@app.route('/api/auth/get_user_uid_from_session', methods=["POST"])
def get_user_uid_from_session():
    try:
        firebase = Firebase()
        session_id = request.form["session_id"]
        decoded_token = firebase.verifyIdToken(session_id)
        uid = decoded_token['uid']
        return uid
    except Exception as e:
        return str(e), 400  # 400 = Bad Request
