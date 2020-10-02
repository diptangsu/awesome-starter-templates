
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

    @classmethod
    def get(cls, **kwargs):
        if kwargs:
            return cls.query.filter_by(**kwargs)
        else:
            return cls.query.all()

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
        except:
            raise

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def to_json(self):
        return {
            'username': self.username,
            'name': self.name,
            'age': self.age,
        }
