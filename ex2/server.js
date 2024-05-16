const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 16001;
const API_URL = 'http://localhost:16000/contratos';

// Set the view engine to Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// main page

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const contratos = response.data;
        res.render('index', { contratos });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

// GET /contratos/:id

app.get('/:id', async (req, res) => {
    try {
        var d = new Date().toISOString().substring(0, 16)
        const response = await axios.get(`${API_URL}/${req.params.id}`);
        const contrato = response.data;
        res.render('contrato', { contrato, date: d});
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

app.get('/entidades/:id', async (req, res) => {
    try {
        var d = new Date().toISOString().substring(0, 16)
        const entidade = req.params.id;
        const response = await axios.get(`${API_URL}?entidade=${entidade}`);
        const contratos = response.data;
        let sumContracts = 0;
        contratos.forEach(element => {
            sumContracts += element.precoContratual;
        });
        res.render('entidade', { contratos , date: d, totalSum: sumContracts});
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
        res.status(500).send('Error fetching data from API');
    }
});
    



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
