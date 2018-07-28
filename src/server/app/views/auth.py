from flask import request
from app import app
from app.data.db import DB


@app.route('/api/auth')
def auth():
    return "Seriosly! What are you looking for? ;)"


@app.route('/api/auth/get_user_uid_from_session', methods=["POST"])
def get_user_uid_from_session():
    try:
        db = DB()
        session_id = request.form["session_id"]
        uid = db.get_user_uid_from_session(session_id)
        return uid
    except Exception as e:
        return str(e), 400  # 400 = Bad Request
