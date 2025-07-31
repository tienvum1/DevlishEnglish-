const express = require("express");
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 4999;

// Kết nối database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes sẽ được thêm ở đây
app.get('/', (req, res) => {
  res.json({ message: 'DevlishEnglish API is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
