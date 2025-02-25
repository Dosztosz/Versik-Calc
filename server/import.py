import pandas as pd
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


# Load data from CSV

        
df = pd.read_csv('data.csv', sep=';', encoding='unicode_escape', on_bad_lines='skip')

uri = "mongodb+srv://dosztosz:5KJjSQL7LLWkoc3Q@cluster0.uy64x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)



# Insert csv data.csv into the MongoDB database
db = client['test'] # Create a new database
collection = db['test'] # Create a new collection in the database   
data = df.to_dict(orient='records') # Convert the dataframe to a dictionary
collection.insert_many(data) # Insert the data into the collection
print("Data inserted successfully")

# Print the first 5 rows from the database named test as table
cursor = collection.find()
df = pd.DataFrame(list(cursor)) # Convert the cursor to a dataframe
print(df.head()) # Print the first 5 rows as a table


