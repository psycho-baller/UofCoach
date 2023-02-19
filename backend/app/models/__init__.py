from app import app, db

from app.models.user import User
from app.models.availability import Availability
from app.models.session import Session
from app.models.review import Review

with app.app_context():
	db.create_all()
