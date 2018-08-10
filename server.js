const Joi = require('joi');
const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const {PORT} = require('./port');
const pedoLogic = require('./logic/peDoLogic');
const {swaggerOptions} = require('./swagger/swaggerOptions');

// Load swagger options
expressSwagger(swaggerOptions);

// Redirect the root path to /api-docs
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

/**
 * This route will return an array of peDo values
 * @route GET /api/print
 * @group api - basic functionality of API
 * @param {number} min.query - minimum value
 * @param {number} max.query - maximum value
 * @returns {array} 200 - An array of peDo values
 * @returns {Error}  400 - Invalid parameters
 */
app.get('/v1/api/print', (req, res) => {
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
        res.status(400).send({error: error.details[0].message});
        return;
    }
    
    // Ensure we pass numbers
    res.send(pedoLogic(+rangeNums.min, +rangeNums.max));
});

// Redirect page not found
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// Log and listen the current port the server is currently running
console.log(`Listening on port ${PORT}...`);
app.listen(PORT);
