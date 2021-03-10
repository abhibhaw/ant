if(['production','ci'].includes(process.env.NODE_ENV))
    module.exports = require('./prod');
else
    module.exports = require('./dev');