const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'cms_db'
});

pool.connect()
  .then(() => console.log('Connected to the cms_db database'))
  .catch(err => console.error('Error connecting to the database', err));

// Read schema.sql
const schemaPath = path.join(__dirname, 'db', 'schema.sql');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');

// Read seeds.sql
const seedsPath = path.join(__dirname, 'db', 'seeds.sql');
const seedsSql = fs.readFileSync(seedsPath, 'utf8');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Employee Management System');
});

// Add your CRUD routes here

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 Not Found Middleware
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});