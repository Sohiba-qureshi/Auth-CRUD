import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

// Create db connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

// Get db data
app.get('/', (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ message: "Error Inside Server" });
        return res.json(result);
    });
});

// Create new student
app.post('/students', (req, res) => {
    const sql = "INSERT INTO students(`Name`, `Email`)  VALUES (?, ?)";
    const values = [req.body.name, req.body.email];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json(result);
    });
});

// Read data
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM students WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ message: "Error Inside Server" });
        return res.json(result);
    });
});

// Update data
app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE students SET Name=?, Email=? WHERE ID=?';
    const id = req.params.id;
    const values = [req.body.name, req.body.email, id];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ message: "Error Inside Server" });
        return res.json(result);
    });
});

// Delete data
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM students WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ message: "Error Inside Server" });
        return res.json(result);
    });
});

// Route for handling signup requests
app.post('/signup', (req, res) => {
    // Extract user data from the request body
    const { name, email, password } = req.body;
  
    // Validate incoming data
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password' });
    }
  
    // Attempt to insert the user into the database
    const sql = "INSERT INTO login (Name, Email, Password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user into database:', err);
        return res.status(500).json({ error: 'An error occurred while creating the user account' });
      }
      
      console.log('User created successfully:', result);
      return res.status(201).json({ message: 'User created successfully' });
    });
});

  // Route for handling login requests
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Validate email and password (you can add more validation logic here)
  
    // Check if the provided email and password match a user in the database
    const sql = "SELECT * FROM login WHERE Email = ? AND Password = ?";
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        console.error('Error querying database for login:', err);
        return res.status(500).json({ error: 'An error occurred while querying the database for login' });
      }
  
      if (result.length === 0) {
        // No user found with the provided email and password
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Login successful
      return res.status(200).json({ message: 'Login successful' });
    });
  });
  
  
  // Start the Express server
  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });