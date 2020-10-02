from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources.users import UserResource

app = Flask(__name__)
app.config.from_pyfile('config.py')
CORS(app)
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(
    UserResource,
    '/users',
    '/users/<int:user_id>'
)


@app.route('/')
def index():
    return {
        'status': 'running'
    }


if __name__ == '__main__':
    from database.db import db
    db.init_app(app)
    app.run(debug=True, host='0.0.0.0')
