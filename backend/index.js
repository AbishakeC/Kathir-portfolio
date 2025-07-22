const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());
const cors = require("cors");
app.use(cors());




const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  domain: String,
  description: String,
});

var mongodburl = "mongodb://localhost:27017/portfolioHirings";
mongoose.connect(mongodburl);
var db=mongoose.connection;
db.once('open', () => console.log('MongoDB connected successfully'))
db.on('error', (err) => console.log('MongoDB connection error:', err));


const HiringForm = mongoose.model("HiringForm", FormSchema);

app.post("/api/form", async (req, res) => {
  try {
    const form = new HiringForm(req.body);
    await form.save();
    res.status(201).json({ message: "Form saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save form" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
