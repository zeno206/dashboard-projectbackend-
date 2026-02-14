import express from "express";
import cors from "cors";
let users = [];


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend chal raha hai 🚀" });
});


app.post("/api/user", (req, res) => {
  const data = [{
    name: "shubham",
    class: 10,
    place: "hp",
  }]



  res.json(data);
});


app.get("/api/users", (req, res) => {
  res.json(users);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
