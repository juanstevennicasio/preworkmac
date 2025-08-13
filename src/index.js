const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// in-memory config object
let config = {
  branding: { name: 'Portal Talento', logoUrl: '', primary: '#0ea5e9' },
  timezone: 'America/Santo_Domingo'
};

// in-memory employees
let employees = [];

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/config', (req, res) => {
  res.json(config);
});

app.put('/config', (req, res) => {
  config = { ...config, ...req.body };
  res.json(config);
});

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.post('/employees', (req, res) => {
  const employee = { id: employees.length + 1, ...req.body };
  employees.push(employee);
  res.status(201).json(employee);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
