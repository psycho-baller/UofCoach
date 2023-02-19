from app import db, bcrypt, loginManager
from app.models import User

from flask import Blueprint, request, session

auth = Blueprint("auth", __name__, url_prefix="/auth")

loginManager.user_loader(lambda uid: User.query.get(uid))
loginManager.unauthorized_handler(lambda: ({"error": "Unauthorized"}, 401))

#
# POST
#

# Register
@auth.route("/register", methods=["POST"])
def register():
	username = request.json.get("username")
	email = request.json.get("email")
	password = request.json.get("password")
	firstName = request.json.get("fname")
	lastName = request.json.get("lastname")
	phone = request.json.get("phone")

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
	username = request.json.get("username")
	password = request.json.get("password")

	if username is None:
		return {"error": "username is required"}, 400
	if password is None:
		return {"error": "password is required"}, 400

	user = User.query.filter_by(username=username).first()

	if not bcrypt.check_password_hash(user.password, password):
		return {"error": "Wrong password"}, 401

	session["user_id"] = user.id

	return {"message": "Login successful"}, 200

# Check if logged in
@auth.route("/isloggedin", methods=["GET"])
def isLoggedIn():
	return {"loggedin": "user_id" in session}, 200

# Logout
@auth.route("/logout", methods=["GET"])
def logout():
	session.pop("user_id", None)
	return {"message": "Logout successful"}, 200
