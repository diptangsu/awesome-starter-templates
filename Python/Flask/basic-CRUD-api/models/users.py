
from database.db import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String, unique=True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)

    def __init__(self, username, name, age):
        self.username = username
        self.name = name
        self.age = age

    def __repr__(self):
        return f'{self.username}'

    def get(self, **kwargs):
        if kwargs:
            return User.query.filter_by(**kwargs)
        else:
            return User.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
