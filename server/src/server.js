const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const uri = "mongodb+srv://dosztosz:5KJjSQL7LLWkoc3Q@cluster0.uy64x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToDatabase();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

let submissionCount = 0;

app.use(express.urlencoded({ extended: true }));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    submissionCount = parseInt(req.query.submissionCount, 10) || 0;
    try {
        const database = client.db('test');
        const collection = database.collection('test');
        const lobs = await collection.distinct('LOB');
        const names = await collection.distinct('NAME');
        res.render('index', { data: [], lobs, names, selectedLob: null, selectedName: null, submissionCount: submissionCount });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

app.post('/filter', async (req, res) => {
    submissionCount = parseInt(req.body.submissionCount, 10) || 0;

    if (submissionCount < 2) {
        submissionCount++;
        res.redirect('/?submissionCount=' + submissionCount);
    } else {
        // Reset submission count and handle the form data
        submissionCount = 0;
        try {
            const selectedLob = req.body.lob || null;
            const selectedName = req.body.name || null;
            const database = client.db('test');
            const collection = database.collection('test');
            const query = {};
            if (selectedLob) {
                query.LOB = selectedLob;
            }
            if (selectedName) {
                query.NAME = selectedName;
            }
            const data = await collection.find(query).toArray();
            const lobs = await collection.distinct('LOB');
            const names = selectedLob ? await collection.distinct('NAME', { LOB: selectedLob }) : [];
            res.render('index', { data, lobs, names, selectedLob, selectedName, submissionCount: submissionCount });
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).send("Error fetching data");
        }
    }
});

app.listen(port, () => {
    console.log(`Lokalny serwer uruchomiony pod adresem: http://localhost:${port}`);
});