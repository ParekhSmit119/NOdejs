const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  { id: 1, name: "Devam", age: 20 },
  { id: 2, name: "Vatsal", age: 21 },
  { id: 3, name: "Smit", age: 22 },
];

app.get("/users", (req, res) => {
  res.status(201).json({ message: "Data Fetched succefully", users });
});

app.get("/users/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    res.status(201).json({ message: "User Found Succesfully", user });
  });

app.post("/users/add",(req,res)=>{
  
})
app.listen(5050, () => {
  console.log("Server is working");
});
