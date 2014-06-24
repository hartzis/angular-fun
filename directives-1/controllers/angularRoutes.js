module.exports = {
  partials: function(req, res) {
    var name = req.params.name;
    res.render('partials/'+name);
  },
  templates: function(req, res) {
    var name = req.params.name;
    res.render('templates/'+name);
  }
}