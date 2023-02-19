# UofCoach

* UofCoach is a tutoring app designed specifically for University of Calgary students who need a little extra help with their coursework. The app connects students with other students who are knowledgeable in the courses they need tutoring in. While our tutors may not have years of experience, they're passionate about helping their peers succeed. UofCoach is an affordable and accessible way to get the support you need to ace your classes.
.....
## Team

* Rami Malouf
* Carlos Montoro 
* Omar Khan
* Osama Bamatraf
* Mahfuz Alam

## Setup

*Note: Assumes a Unix-like environment (Linux, macOS, etc.)*

### Backend

1. cd into the backend directory

```bash
cd backend
```

2. Create a Python virtual environment (if you haven't already)

```bash
python -m venv .venv
```
or
```bash
python3 -m venv .venv
```

*Note: `.venv` is the name of the virtual environment. You can name it whatever you want.*

3. Activate the virtual environment

```bash
source .venv/bin/activate
```

*Note: change `.venv` to whatever you named your virtual environment directory.*

4. Install the requirements

```bash
pip install -r requirements.txt
```
5. Install and init MySQL

Linux:
```bash
sudo apt-get install mysql-server
mysql -u root -p
```

macOS:
```bash
brew install mysql
mysql -u root -p
```

6. Create the database

```SQL
CREATE DATABASE uofcoach;
```

*Note: You can set the database name / user / password / port, but you'll need to update the `.env` file (see below)*

7. Create `.env` file and add app and database settings

* `SECRET_KEY`: The secret key for the application (can be any string)
* `DB_TYPE`: The engine type of database - defaults to "mysql"
* `DB_HOST`: The hostname for the database - defaults to "localhost"
* `DB_PORT`: The port for the database - defaults to "3306"
* `DB_NAME`: The name of the database - defaults to "uofcoach"
* `DB_USER`: The username for the database - defaults to "root"
* `DB_PSSW`: The password for the database - defaults to ""

8. Run the application

```bash
flask run
```

7. (PRODUCTION) Change the `FLASK_ENV` environment variable to `production`

In `backend/.flaskenv`

```bash
FLASK_ENV=production
```

### Frontend

