const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send(`
    <h2>Enter Your Name</h2>
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="name" required/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`<h2>Hello, ${name}!</h2> <a href="/">Go Back</a>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
