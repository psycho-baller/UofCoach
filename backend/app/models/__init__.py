from app import app, db

from app.models.enrollment import Enrollment
from app.models.review import Review
from app.models.user import User
from app.models.session import Session

with app.app_context():
	db.create_all()
