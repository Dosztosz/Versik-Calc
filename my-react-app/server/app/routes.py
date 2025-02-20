from flask import Blueprint, jsonify
from pymongo import MongoClient
from pymongo.server_api import ServerApi

api = Blueprint('api', __name__)

uri = "mongodb+srv://dosztosz:5KJjSQL7LLWkoc3Q@cluster0.uy64x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['test']
collection = db['test']

@api.route('/data', methods=['GET'])
def get_data():
    cursor = collection.find()
    data = list(cursor)
    return jsonify(data)