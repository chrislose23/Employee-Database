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

//View all departments
app.get('/departments', (req, res) => {
  const sql = 'SELECT * FROM department';
  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// View all roles
app.get('/roles', (req, res) => {
  const sql = 'SELECT * FROM role';
  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// View all employees
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employee';
  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Add a department
app.post('/departments', ({ body }, res) => {
  const { dpt_name } = body;
  const sql = 'INSERT INTO department (dpt_name) VALUES ($1)';
  const params = [dpt_name];
  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Department added successfully',
      data: body
    });
  });
});

// Add a role
app.post('/roles', ({ body }, res) => {
  const { title, salary, department_id } = body;
  const sql = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
  const params = [title, salary, department_id];
  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Role added successfully',
      data: body
    });
  });
});

// Add an employee
app.post('/employees', ({ body }, res) => {
  const { first_name, last_name, role_id, manager_id } = body;
  const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
  const params = [first_name, last_name, role_id, manager_id];
  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Employee added successfully',
      data: body
    });
  });
});

// Update an employee role
app.put('/employees/:id', ({ params: routeParams, body }, res) => {
  const { id } = routeParams;
  const { role_id } = body;
  const sql = 'UPDATE employee SET role_id = $1 WHERE id = $2';
  const params = [role_id, id];
  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Employee role updated successfully',
      data: body
    });
  });
});

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

// Export the app instance and pool
module.exports = { app, pool };
