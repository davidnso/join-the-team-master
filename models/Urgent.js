var mongoose = require('mongoose');

var CategoriesSchema = mongoose.Schema({
	name:{
		type: String, 
		required:true
	},
	tasks:{
		type: String,  
		required:false
	}
	
});

var Categories = module.exports = mongoose.model('Categories',CategoriesSchema);

module.exports.getCategories = function(callback,limit){
 Categories.find(callback).limit(limit);
}
module.exports.createCategory = function(callback){
	Categories.create(callback)
}
module.exports.updateCategory = function(id, Categories, options, callback){
	var query = {_id:id}
	var update = Categories.name
	Categories.findOneAndUpdate(query, update, options, callback)
}
module.exports.deleteCategory = function(id, callback){
	var query = {_id:id};
	Categories.remove(query, callback)
}
module.exports.getTaskById = function(name, callback){
	var query = {name : name}
	Categories.findOne(query,{},callback)
}