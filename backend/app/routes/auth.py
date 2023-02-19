from app import bcrypt, db
from app.models import User

from flask import Blueprint, request

auth = Blueprint("auth", __name__, url_prefix="/auth")

#
# POST
#

# Register
@auth.route("/register", methods=["POST"])
def register():
	if "username" in request.json:
		username = request.json["username"]
	else:
		return {"error": "Username not provided"}, 400
	if "email" in request.json:
		email = request.json["email"]
	else:
		return {"error": "Email not provided"}, 400
	if "password" in request.json:
		password = request.json["password"]
	else:
		return {"error": "Password not provided"}, 400
	if "fname" in request.json:
		firstName = request.json["fname"]
	else:
		return {"error": "First name not provided"}, 400
	lastName = request.json["lname"] if "lname" in request.json else None
	phone = request.json["phone"] if "phone" in request.json else None

	print(username, type(username))
	print(email, type(email))
	print(password, type(password))
	print(firstName, type(firstName))
	print(lastName, type(lastName))
	print(phone, type(phone))

	# Check if user exists with username or email
	if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
		return {"error": "User already exists"}, 400

	# Create user
	try:
		user = User(
			username,
			email,
			bcrypt.generate_password_hash(password).decode("utf-8"),
			firstName,
			lastName,
			phone
		)
	except Exception as e:
		return {"error": f"Error creating user object: {e}"}, 400

	try:
		db.session.add(user)
		db.session.commit()
	except Exception as e:
		return {"error": f"Error adding user to database: {e}"}, 400

	return {
		"message": "User created successfully",
		"user_id": user.id
	}, 201

# Login
@auth.route("/login", methods=["POST"])
def login():
	pass
