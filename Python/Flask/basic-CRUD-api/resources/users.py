from flask_restful import Resource, reqparse
from flask import abort
from models.users import User


class UserResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'username',
        type=str,
        required=True,
        help="This is a required field"
    )
    parser.add_argument(
        'name',
        type=str,
        required=True,
        help="This is a required field"
    )

    def get(self, user_id=None):
        '''GET /users/{id} --> get user with id=id
        '''
        if not user_id:
            abort(404)
        return User.get(id=user_id)

    def post(self, user_id=None):
        '''POST /users/ --> add new user
        '''
        if user_id:
            abort(404)

        data = UserResource.parser.parse_args()

        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = User(username, password)
            user.save()

            return {
                'message': 'A new user has been created'
            }
        else:
            return {
                'message': 'Failed to create a new user. \
                            All fields are required'
            }
