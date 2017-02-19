var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var uniqueValidator = require('mongoose-unique-validator');

// create a schema
var eventSchema = new Schema({
  date: {
    type:Date,
    required:[true,'date is required']
  },
  title:{
    type:String,
    required:[true,'title is required'],
    unique:true
  },
  name: {
    type:String,
    required:[true,'name is required']
  },
  email: {
    type: String,
    validate:{
      validator: function(email){
          return re.test(email);
      },
      message: 'email format is wrong'
    },
    required:[true,'email is required'],
    unique:true
  }
});

eventSchema.plugin(uniqueValidator);

// the schema is useless so far
// we need to create a model using it
var Events = mongoose.model('events', eventSchema);

// make this available to our users in our Node applications
module.exports = Events;
