const express = require("express");
const app = express();
const PORT = 3000;

const students = [
  { id: 1, name: "Ravi", age: 20, course: "Computer Science" },
  { id: 2, name: "Anita", age: 22, course: "Electronics" },
  { id: 3, name: "Kiran", age: 21, course: "Mechanical" }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
