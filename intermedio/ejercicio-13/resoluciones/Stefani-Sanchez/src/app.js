const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/health', (req, res) => res.json({ ok: true, message: 'Health check for intermedio ejercicio-13' }));
app.listen(port, () => console.log('Server running on port', port));
