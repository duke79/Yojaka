from flask import jsonify
from app import app


@app.route('/api/auth/get_user_uid_from_session')
def get_user_uid_from_session():
    return jsonify({"simply": "this"})
