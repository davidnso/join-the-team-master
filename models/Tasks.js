var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
	text:{ type: String, 
		required: true
		  },
	Completed:{type: Boolean,
			required:false}
}); 

var Tasks = module.exports = mongoose.model('Tasks', taskSchema);
module.exports.getTasks = function(callback){
	Tasks.find(callback); 
}
module.exports.addTask = function(Task, callback){
	Tasks.create(Task, callback)
}
module.exports.updateTask = function(id, Task, options, callback){
	var query = {_id:id}; 
	var update = {name: Task.name}
	Tasks.findOneAndUpdate(query, update, options, callback)
}
module.exports.deleteTask = function(id, callback){
	var query ={_id:id}; 
	Tasks.remove(query,callback);
}