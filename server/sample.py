import pandas as pd
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Loading link to the database
uri = "mongodb+srv://dosztosz:5KJjSQL7LLWkoc3Q@cluster0.uy64x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Print all the data from the database named test as table
db = client['test'] # Create a new database
collection = db['test'] # Create a new collection in the database
cursor = collection.find()
df = pd.DataFrame(list(cursor)) # Convert the cursor to a dataframe
print(df) # Print the data as a table

print(df["NAME"]) # Print the NAME column