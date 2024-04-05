const path = require('path');

module.exports = {
    // ...
    webpack: {
        alias: {
            '@examplelib': path.join(path.resolve(__dirname, './src/libs/examplelib/dist')),
        }
    }
}