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
        newItem.id = itemList.length ++ ;
        itemList.push(newItem);
        await asyncWriteFile(JSON.stringify(itemList), req.app.locals.dataFilePath);
        res.status(201).send(itemList);
    }
}

exports.modifyStatus = async(req, res) => {
    const id = req.params.id;
    const file = await asyncReadFile(req.app.locals.dataFilePath);
    const itemList = JSON.parse(file);
    const newList = itemList.filter(v => v.id != id);
    if(itemList.length == newList.length){
        res.status(404).send();
    }else{
        itemList[id-1].status = !itemList[id-1].status;
        await asyncWriteFile(JSON.stringify(itemList), req.app.locals.dataFilePath);
        res.status(200).send(itemList);
    }
}

exports.deleteItem = async(req, res) => {
    const id = req.params.id;
    const file = await asyncReadFile(req.app.locals.dataFilePath);
    const itemList = JSON.parse(file);
    const newList = itemList.filter(v => v.id != id);
    if(newList.length == itemList.length){
        res.status(404).send();
    }else{
        await asyncWriteFile(JSON.stringify(newList), req.app.locals.dataFilePath);
        res.status(200).send(newList);
    }
}
