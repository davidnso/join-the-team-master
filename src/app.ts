import { MongoDriverFactory } from "./MongoConnectorFactory";
import * as exp from "express";
import * as body from 'body-parser';
var app = exp(); 
app.use(body.json())
app.listen(3000);
MongoDriverFactory.build()
  .then( (datastore) => {
    var task = {'text':'If this works then i understand', 
    'completed': false}
   app.get('/api/tasks', function(req, res){
     
     datastore.listTasks().then((tasks)=>{
       res.send(tasks)
       console.log('tasks should display')
     }).catch(()=>{
       console.error('you messed up.')
     })
   })

   app.post('/api/tasks', function(req,res){
     task = req.body;
    datastore.createTask(task).then(()=>{
      res.send('"it worked again... woo')
      console.log("it worked again... woo")
    }).catch( () =>{
      console.log('try again.')
    })
   })

   app.delete('/api/tasks/:_id' , function(req,res){
     var id = req.params._id; 
     datastore.deleteTask(id).then(()=>{
       res.send('task deleted')
     }).catch((()=>{
       res.send('it did not work.')
     }))
   })  
  })
  .catch(e => {
    throw e;
  });