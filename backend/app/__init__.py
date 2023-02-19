from app.config import Config

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_login import LoginManager

from sqlalchemy.ext.declarative import DeclarativeMeta

#
# Init Flask app
#

app = Flask(__name__)

cfg = Config()

app.config.from_object(cfg)

#
# Init extra objects
#

db: DeclarativeMeta = SQLAlchemy(app)

migrate = Migrate(app, db)

bcrypt = Bcrypt(app)
session = Session(app)
loginManager = LoginManager(app)

#
# Import models and routes
#

from app import models, routes
