from flask_restful import Resource, reqparse
from flask import abort
from models.users import User


class UserResource(Resource):
    post_parser = reqparse.RequestParser()
    post_parser.add_argument(
        'username',
        type=str,
        required=True,
        help="This is a required field"
    )
    post_parser.add_argument(
        'name',
        type=str,
        required=True,
        help="This is a required field"
    )
    post_parser.add_argument(
        'age',
        type=int,
        required=False,
    )

    put_parser = reqparse.RequestParser()
    put_parser.add_argument(
        'name',
        type=str,
    )
    put_parser.add_argument(
        'age',
        type=int,
    )

    def get(self, user_id=None):
        '''
        GET /users --> get all users
        GET /users/{id} --> get user with id=id
        '''
        if user_id:
            return User.get(id=user_id).to_json()
        else:
            return [
                user.to_json()
                for user in User.get()
            ]

    def post(self, user_id=None):
        '''POST /users --> add new user

        Fields:
            username: username of the user, must be unique
            name: name of the user
            age: age of the user

        Returns:
            Created user object
        '''
        if user_id:
            abort(404)

        data = UserResource.post_parser.parse_args()

        username = data.get('username')
        name = data.get('name')
        age = data.get('age')

        if username and name:
            user = User(username, name, age)
            try:
                user.save()
            except:
                return {
                    'message': ('Failed to create a new user. '
                                'Please try another username')
                }, 424

            return {
                'message': 'A new user has been created',
                'user': user.to_json()
            }, 201
        else:
            return {
                'message': ('Failed to create a new user. '
                            'All fields are required')
            }, 424

    def put(self, user_id=None):
        '''
        PUT /users/{id} --> update user with id=id

        Fields:
            name: name of the user
            age: age of the user

        Returns:
            Updated user object
        '''
        if user_id:
            user = User.get(id=user_id)

            data = UserResource.put_parser.parse_args()

            name = data.get('name')
            age = data.get('age')

            if name:
                user.name = name
            if age:
                user.age = age

            user.save()

            return {
                'message': 'User object has been updated',
                'user': user.to_json()
            }
        else:
            abort(404)
