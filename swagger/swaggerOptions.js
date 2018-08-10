const {PORT} = require('../port');

module.exports.swaggerOptions = {
    swaggerDefinition: {
        info: {
            description: 'This is a simple node API made with love and swag!',
            title: 'Simple Node Api',
            version: '1.0.0',
        },
        host: `localhost:${PORT}`,
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['../server.js'] //Path to the API handle folder
};