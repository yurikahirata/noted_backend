import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import users from "./routes/users.mjs";
import notes from "./routes/notes.mjs";
import collections from "./routes/collections.mjs";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", users);
app.use("/notes", notes)
app.use("/collections", collections)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});