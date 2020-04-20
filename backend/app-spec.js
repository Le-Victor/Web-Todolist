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
    
})