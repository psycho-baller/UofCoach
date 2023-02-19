from app.models import User
from app.routes.utils import getAll, getById

from flask import Blueprint, request

user = Blueprint("users", __name__, url_prefix="/users")

#
# GET
#

# Get all users
@user.route("", methods=["GET"])
def getUsers():
	return getAll(User)

@user.route("/<id>", methods=["GET"])
def getUserById(id):
	print(type(id))
	return getById(User, id)
