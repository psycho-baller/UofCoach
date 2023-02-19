from app.models import User
from app.routes.utils import getAll, getById

from flask import Blueprint
from flask_login import login_required

user = Blueprint("users", __name__, url_prefix="/users")

#
# GET
#

# Get all users
@user.route("", methods=["GET"])
@login_required
def getUsers():
	return getAll(User)

@user.route("/<id>", methods=["GET"])
@login_required
def getUserById(id):
	return getById(User, id)
