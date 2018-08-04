from app import app
from flask_cors import CORS, cross_origin
from app.data.config import Config

config = Config()

'''Run app'''
CORS(app, origins=["http://localhost:3000", "https://vilokanlabs-e8847.firebaseapp.com"])  # Allow cross-domain
app.run(port=5000, debug=config["debug"])
