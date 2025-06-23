const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const authRoutes = require('./routes/userAuth');
const orderRoutes = require('./routes/OrderRoute');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.use('/laundry', authRoutes);
app.use('/laundry', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
