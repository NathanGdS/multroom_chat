// importar as config do servidor
var app = require('./config/server');

//parametrizar a porta de escuta
var server = app.listen(800, function(){
    console.log('Servidor Online');
});
