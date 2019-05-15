module.exports = function(appication)
{
    appication.get('/', function(req, res)
    {
        res.send('Teste');
    });
}