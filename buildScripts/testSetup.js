// file is not  transpiled so it must use common js and es5

// register babel to transpile before our tests run

require('babel-register')();

//disable mocha features that babel doesnot understand
require.extensions['.css'] = function() {};
