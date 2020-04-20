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
                "id":3,
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

        it("create an item which has existed", (done) => {
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

})