const express = require('express');
const {
    getTodoList,
    createItem,
    modifyStatus,
    deleteItem
} = require("./controller.js")

const app = express();
app.locals.dataFilePath = "./data.json";

const port = 3000;

app.use(express.json());
app.get("/todoList", getTodoList);
app.post("/todoList",createItem);
app.put("/todoList/:id",modifyStatus);
app.delete("/todoList/:id",deleteItem);

app.listen(port, () => console.log(`port ${port} is being listening!`));

exports.app = app;