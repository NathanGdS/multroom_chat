module.exports = function(appication)
{
    appication.get('/', function(req, res)
    {
        application.app.controllers.index.index(application, req, res);
    });
}