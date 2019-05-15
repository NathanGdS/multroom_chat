module.exports = function(appication)
{
    appication.post('/chat', function(req, res)
    {
        res.render('chat');
    });

    appication.get('/chat', function(req, res)
    {
        res.render('chat');
    });
}