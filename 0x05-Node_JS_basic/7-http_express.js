const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = req.query.database; // Get the database name from the query parameter
  const filePath = path.join(__dirname, '3-read_file_async.js', databaseName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the file');
    } else {
      const students = data.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
      res.send(`This is the list of our students\n${students.join('\n')}`);
    }
  });
});

module.exports = app;
