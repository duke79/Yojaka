# HTTP Error Codes and their meaning: https://www.symantec.com/connect/articles/http-error-codes
from dukepy.config import Config
from dukepy.sql_alchemy.tables.alchemy_base import db_uri, AlchemyBase
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

## Init SQLAlchemy
config = Config()
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
if config["debug"]:
    app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app, model_class=AlchemyBase)

from app.views import auth  # /api/auth
from app.views import user  # /api/user
from app.views import graph  # /graph
