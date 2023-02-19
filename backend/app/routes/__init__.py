from app import app
from app.routes.auth import *
from app.routes.users import *
from app.constants import ERROR_MESSAGES

from werkzeug.exceptions import HTTPException


# Error handler for all routes
@app.errorhandler(HTTPException)
def errorHandler(error):
	return {
		"error": ERROR_MESSAGES[error.code] if error.code in ERROR_MESSAGES else error.description
	}, error.code


@app.route("/")
def test():
	return "Hello World"


app.register_blueprint(auth)
app.register_blueprint(user)
