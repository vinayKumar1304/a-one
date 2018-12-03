const express = require('express');
const app = express();

const userRoutes = require('./routes/user');

app.use((req, res, next)=>{
    res.status(200).json({
        message: "it works"
    });
});

app.use("/user", userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
});


module.exports = app;