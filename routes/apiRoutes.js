const tableData = require("../data/tableData");
const waitingListData = require("../data/waitingListData");

module.exports = function (app) {
    app.get("/api/tables", (req, res) => {
        res.json(tableData);
    });
    app.get("/api/waitlist", (req, res) => {
        res.json(waitingListData);
    });
    app.post("/api/tables", (req, res) => {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitingListData.push(req.body);
            res.json(false);
        }
    });
    app.put("/api/clear", (req, res) => {
        tableData.length = [];
        waitingListData.length = [];
        res.json({ ok: true });
    });
}