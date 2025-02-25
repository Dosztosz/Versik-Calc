class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Node.js Server!');
    }
}

module.exports = IndexController;