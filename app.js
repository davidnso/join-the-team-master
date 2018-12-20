var exp = require('express'); 
var path = require('path');
var mongoose = require('mongoose'); 
var app = exp(); 
var body = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; 
var data;
Categories = require('./models/Urgent');
Tasks = require('./models/Tasks');



mongoose.connect('mongodb://localhost:27017/task-service',{useNewUrlParser:true});
var db = mongoose.connection;
app.use(body.json())
app.get('/', function (req,res){

res.send('Hello There')
console.log('Server started on 3000...');
})
app.get('/api/Categories', function(req,res){
 	Categories.getCategories(function(err, Categories){
 		if(err){
 			throw err; 
 		}
 		res.json(Categories);
 		console.log('should print Categories')
 	});
 	
});
app.get('/api/Categories/name', function(req,res){
	var name = req.params.name;
	Categories.getTaskById( name ,function(err, Categories){
		if(err){
			throw err;
		}
		res.json(Categories)
	})
})
app.get('/api/Tasks', function(req,res){
 	Tasks.getTasks(function(err, Tasks){
 		if(err){
 			throw err; 
 		}
 		res.json(Tasks);
 		console.log('should print tasks')
 	});
 	
});
app.post('/api/Tasks', function(req,res){
	var Task = req.body
 	Tasks.addTask(Task, function(err, Task){
 		if(err){
 			throw err; 
 		}
 		res.json(Task);
 		console.log('should POST tasks')
 	});
 	
});
app.post('/api/Categories', function(req,res){
	var categories = req.body
 	Categories.createCategory(categories, function(err, categories){
 		if(err){
 			throw err; 
 		}
 		res.json(categories);
 		console.log('should POST categories')
 	});
 	
});
app.put('/api/Categories/:_id', function(req,res, client){
	var id = req.params._id;
	var categories = req.body;
 	Categories.updateCategory(id, categories,{}, function(err, categories){
 		if(err){
 			throw err; 
 		}
 		res.json(categories);
 		console.log('should update categories')
 	});
 	
});
app.put('/api/Tasks/:_id', function(req,res,client){
	var id = req.params._id;
	var Task = req.body;
	//client.db('task-service').collection('tasks').update({})
 	Tasks.updateTask(id, Task,{}, function(err, Task){
 		if(err){
 			throw err; 
 		}
 		res.json(Task);
 		console.log('should POST tasks')

 	});
 	
});
app.delete('/api/tasks/:_id',function(req,res){
	var id = req.params._id;
	Tasks.deleteTask(id, function(err, Tasks){
		if(err){
			throw err;
		}
		res.json(Tasks); 
		console.log('Should DELETE tasks')
	})

})
app.delete('/api/categories/:_id', function(req, res){
	var id = req.params._id;
	Categories.deleteCategory(id,function(err, Categories){
		if(err){
			throw err;
		}
		res.json(Categories);
		console.log('Should DELETE category')
	})
	})

app.listen(3000);

//return here later on...
/*MongoClient.connect(url, {useNewUrlParser:true},function(err,client){
if (err)throw err;
console.log(client.db('task-service').collection('categories').find({}).toArray())
});
app.get('/',function(req,res){
	console.log('server running on 3000...')
	
})

*/