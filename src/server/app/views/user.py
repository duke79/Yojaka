from flask import request, jsonify
from app import app
from app.data.db import DB


@app.route('/api/user')
def user():
    return "Seriously! What are you looking for? ;)"


@app.route('/api/user/info', methods=["POST"])
def get_user():
    try:
        db = DB()
        session_id = request.form["session_id"]
        user = db.get_user_by_session_id(session_id)
        return jsonify(user)
    except Exception as e:
        return str(e), 400  # 400 = Bad Request
