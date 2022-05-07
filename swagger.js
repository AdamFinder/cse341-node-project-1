const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'AFinder Recipe API',
    description: 'Recipe API',
  },
  host: 'cse341-node-project-1.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);