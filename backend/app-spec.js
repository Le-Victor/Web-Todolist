const {app} = require("./app.js");
const request = require("supertest");

describe("app", () => {
    describe("get todoList", () => {
        it("should return all items", (done) => {
            request(app).get("/todoList").expect(200).expect(
                [
                    {
                        "id": 1,
                        "content": "Restful API homework",
                        "status": true
                    },
                    {
                        "id": 2,
                        "content": "update homework",
                        "status": false
                    }
                ]
            ).end((err, res) => {
                if(err) throw err;
                done();
            })
        })
    })

    describe("create a new item", () => {
        it("create an item which didn's exist", (done) => {
            request(app).post("/todoList").send({
                "content":"play games",
                "status":false
            }).expect(201).expect([
                {
                    "id": 1,
                    "content": "Restful API homework",
                    "status": true
                },
                {
                    "id": 2,
                    "content": "update homework",
                    "status": false
                },
                {
                    "id":3,
                    "content":"play games",
                    "status":false
                }
            ]).end((err, res) => {
                if(err) throw err;
                done();
            })
        })

        it("create an item which is existed", (done) => {
            request(app).post("/todoList").send({
                "id":3,
                "content":"play games",
                "status":false
            }).expect(400).end((err, res) => {
                if(err) throw err;
                done();
            })
        })
    })

    describe("modify status", () => {
        it("false to true", (done) => {
            request(app).put("/todoList/2").expect(200).expect([
                {
                    "id": 1,
                    "content": "Restful API homework",
                    "status": true
                },
                {
                    "id": 2,
                    "content": "update homework",
                    "status": true
                },
                {
                    "id":3,
                    "content":"play games",
                    "status":false
                }
            ]).end((err, res) => {
                if(err) throw err;
                done();
            })
        })

        it("true to false", (done) => {
            request(app).put("/todoList/2").expect(200).expect([
                {
                    "id": 1,
                    "content": "Restful API homework",
                    "status": true
                },
                {
                    "id": 2,
                    "content": "update homework",
                    "status": false
                },
                {
                    "id":3,
                    "content":"play games",
                    "status":false
                }
            ]).end((err, res) => {
                if(err) throw err;
                done();
            })
        })

        it("illegal modify", (done) => {
            request(app).put("/todoList/100").expect(404).end((err, res) => {
                if(err) throw err;
                done();
            })
        })
    })

    describe("delete item", () => {
        it("delete an item which is existed", (done) => {
            request(app).delete("/todoList/3").expect(200).expect([
                {
                    "id": 1,
                    "content": "Restful API homework",
                    "status": true
                },
                {
                    "id": 2,
                    "content": "update homework",
                    "status": false
                } 
            ]).end((err, res) => {
                if(err) throw err;
                done();
            })
        })

        it("delete an item which isn't existed", (done) => {
            request(app).delete("/todoList/3").expect(404).end((err, res) => {
                if(err) throw err;
                done();
            })
        })

    })

})



