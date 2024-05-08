-- View all departments
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

-- View all roles
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

-- View all employees
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

-- Add a department
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

-- Add a role
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

-- Add an employee
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

-- Update an employee role
app.put('/employees/:id', ({ params, body }, res) => {
  const { id } = params;
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
