// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/predict', (req, res) => {
    const { bedrooms, bathrooms, sqft } = req.body;

    const predictedPrice = 50000 + bedrooms * 10000 + bathrooms * 5000 + sqft * 50;

    res.json({ price: predictedPrice });
});

app.listen(3000, () => {
    console.log('✅ Node.js server running on http://localhost:3000');
});
