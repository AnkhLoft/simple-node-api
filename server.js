const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const printPedo = require('./peDoLogic');

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to this simple node Api');
});


app.get('/api/print', (req, res) => {
    const {
        query
    } = req;
    const rangeNums = {
        min: query.min || 1,
        max: query.max || 100
    };
    const schema = {
        min: Joi.number().positive(),
        max: Joi.number().positive().greater(Joi.ref('min'))
    };
    const {error} = Joi.validate(rangeNums, schema);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    res.send(printPedo(rangeNums.min, rangeNums.max));
});

console.log(`Listening on port ${port}...`);
app.listen(port);
