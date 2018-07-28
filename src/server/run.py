from app import app
from app.data.config import Config

config = Config()

'''Run app'''
app.run(port=5000, debug=config["debug"])
