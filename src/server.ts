import express from 'express';

const app = express();

app.get("/users", (req, res) => {
    res.json({"user":"Lucas"});
});

app.listen(3333);