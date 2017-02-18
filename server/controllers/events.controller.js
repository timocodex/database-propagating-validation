var Events = require('../models/event')

module.exports = {
  create: function(req,res){
    var newEvent = new Events({
      title: req.body.title,
      date: req.body.date,
      name: req.body.name,
      email: req.body.email
    })

    newEvent.save(function(err){
      if(err){
        res.json(err)
      }
      else{
        res.json(newEvent)
      }
    })
  }
}
