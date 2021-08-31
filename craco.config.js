const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@styles': resolvePath('./src/common/styles'),
            '@common': resolvePath('./src/common'),
            '@components': resolvePath('./src/components'),
            '@store': resolvePath('./src/common/store'),
        }
    },
  
}