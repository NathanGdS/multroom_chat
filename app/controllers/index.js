//crinado função que será exportada no require do módulo

module.exports.index = function(application, req, res)
{

    res.render('index',{validacao: {}});
}