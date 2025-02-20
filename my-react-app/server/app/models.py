from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class DataModel(db.Model):
    __tablename__ = 'test'  # Name of the collection in MongoDB

    id = db.Column(db.String, primary_key=True)  # Assuming 'id' is a string
    # Define other fields based on your MongoDB document structure
    # Example:
    # field_name = db.Column(db.String)

    def __repr__(self):
        return f"<DataModel {self.id}>"  # Customize the representation as needed