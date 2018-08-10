const Joi = require('joi');
const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const port = process.env.PORT || 3000;
const printPedo = require('./peDoLogic');

const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a simple node API',
            title: 'Simple Node Api',
            version: '1.0.0',
        },
        host: `localhost:${port}`,
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./server.js'] //Path to the API handle folder
};

expressSwagger(options);


// Root Route
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

/**
 * This function comment is parsed by doctrine
 * @route GET /api/print
 * @group api - basic functionality of API
 * @param {number} min.query - minimum value
 * @param {number} max.query - maximum value
 * @returns {object} 200 - An array of peDo values
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

    res.send(printPedo(rangeNums.min, rangeNums.max));
});

// Redirect page not found
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log(`Listening on port ${port}...`);
app.listen(port);
