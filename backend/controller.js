const fs = require("fs");
const {
    asyncReadFile,
    asyncWriteFile
} = require("./dao.js");

exports.getTodoList = (req, res) => {
    fs.readFile(req.app.locals.dataFilePath, "utf-8", (err, data) => {
        if(err){
            return res.status(500).send();
        }
        res.send(JSON.parse(data));
    })
}

exports.createItem = async(req, res) => {
    const newItem = req.body;
    const file = await asyncReadFile(req.app.locals.dataFilePath);
    const itemList = JSON.parse(file);
    if(itemList.filter(v => v.content == newItem.content).length != 0){
        res.status(400).send();
    }else{
        newItem.id = itemList.length + 1;
        itemList.push(newItem);
        await asyncWriteFile(JSON.stringify(itemList), req.app.locals.dataFilePath);
        res.status(200).send(itemList);
    }
}

exports.modifyStatus = (req, res) => {
    console.log("modifyStatus");
}

exports.deleteItem = (req, res) => {
    console.log("deleteItem");
}
