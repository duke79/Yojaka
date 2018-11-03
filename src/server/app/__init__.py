# HTTP Error Codes and their meaning: https://www.symantec.com/connect/articles/http-error-codes
import os

from dukepy.config import Config
user_home = os.path.expanduser("~")
config_dir = os.path.join(user_home, ".yojaka")
config_file = os.path.join(config_dir, "config.json")
config = Config(path=config_file)

from dukepy.sql_alchemy.tables.alchemy_base import db_uri, AlchemyBase
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

## Init SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
if config["debug"]:
    app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app, model_class=AlchemyBase)

from .data.tables import *
migrate = Migrate(app, db)

#from .views import *
