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
        var ero = err.errors.title||err.errors.date||err.errors.name||err.errors.email
        res.json(ero.message)
      }
      else{
        res.json("new Event entry success")
      }
    })
  },
  show: function(req,res){
    Events.find({},function(err,result){
      if(err){
        res.json(err)
      }
      else{
        res.json(result)
      }
    })
  },
  delAll: function(req,res){
    Events.remove({},function(err){
      if(err){
        res.json(err)
      }
      else{
        res.json('semua data berhasil dihapus')
      }
    })
  }
}
