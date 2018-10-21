import os
from dukepy.config import Config

user_home = os.path.expanduser("~")
config_dir = os.path.join(user_home, ".yojaka")
config_file = os.path.join(config_dir, "config.json")

config = Config(path=config_file)

from app import app
from flask_cors import CORS, cross_origin

'''Run app'''
CORS(app, origins=config["allowed_domains"])  # Allow cross-domain
app.run(port=5000, debug=config["debug"])
