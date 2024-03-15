import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: false,
  })
);
const currentUser = {
  id: 1,
  name: "Jack",
  age: 28,
  hairColor: "brown",
  hobbies: ["coding", "swimming"],
};

const users = [
  {
    id: 1,
    name: "Jack",
    age: 28,
    hairColor: "brown",
    hobbies: ["coding", "swimming"],
  },
  {
    id: 2,
    name: "Jill",
    age: 25,
    hairColor: "blonde",
    hobbies: ["hiking", "reading"],
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    hairColor: "black",
    hobbies: ["football", "cooking"],
  },
  {
    id: 4,
    name: "Alice",
    age: 32,
    hairColor: "red",
    hobbies: ["yoga", "traveling"],
  },
  {
    id: 5,
    name: "John",
    age: 20,
    hairColor: "blonde",
    hobbies: ["video games", "skating"],
  },
  {
    id: 6,
    name: "Jane",
    age: 23,
    hairColor: "brown",
    hobbies: ["painting", "photography"],
  },
];

const products = [
  {
    id: 1,
    name: "Vite",
    price: "$49",
    description: "Next generation frontend tooling.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "React",
    price: "$99",
    description: "A JavaScript library for building user interfaces",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Angular",
    price: "$129",
    description: "A framework for building web applications",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Vue",
    price: "$39",
    description: "A progressive framework for building user interfaces",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Svelte",
    price: "$29",
    description:
      "A compiler that converts components into highly performant vanilla JavaScript",
    rating: 4.3,
  },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/current-user", (req, res) => {
  res.send(currentUser);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.post("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  const updatedUser = { ...user, ...req.body };
  res.send(updatedUser);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.send(product);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
