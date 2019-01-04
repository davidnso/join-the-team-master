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
   app.put('/api/tasks/:_id' ,(req,res)=>{
     let update = req.body + req.params._id; 
     let updateable = req.params.id;
     datastore.updateTask(update)
     .then(()=>{
       res.send('Task updated.')
     }).catch(()=>{
       res.send("Task not updated.")
     })
   })
   app.get('/api/categories', (req,res)=>{
     datastore.listCategories().then(()=>
     {
       res.send('Categories should be listed.')
     }
       
     ).catch(()=>{
       res.send("Categories not listed. ")
     })
   })
   app.post('/api/categories', (req,res)=>{
     let Category = req.body; 
     datastore.createCategory(Category)
     .then((()=>{
        console.log(Category+' Was added to the DB.')
     })).catch(()=>{
        console.log('The category was not added. ')
        res.send('post categories not working.')
     })
   })
   app.delete('/api/categories/:_id', (req,res)=>{
    let deleteThis = req.params._id; 
    datastore.deleteCategory(deleteThis)
    .then(()=>{
      console.log(deleteThis + 'was deleted')
      res.send('not deleted.')
    }).catch(()=>{
      console.log('Category not deleted.')
      res.send('delete function not working')
    })
   })
   app.put('/api/categories/:_id', (req,res)=>{
     let updateID = req.params._id;
     let updateName = req.body; 
    datastore.updateCategory(updateID, updateName)
    .then(()=>{
      console.log(updateName + ' was added to the DB using ID#:' + updateID)
      res.send('category updated.')
    }).catch(()=>{
      res.send('not updated.')
    })
   })
   app.put('/api/categories/:_id', (req,res)=>{
     let categoryID = req.params._id
     var tasksList:string[] = req.body
     datastore.addTasksToCategory(categoryID , tasksList)
      .then(()=>{
        res.send(tasksList + 'was added to the category '+categoryID )
        console.log('success')
      }).catch(()=>
      {
        res.send(tasksList + ' Was not added to the category')
      })
   })
   app.delete('/api/categories/:_id', (req,res)=>{
     let categoryID = req.params._id; 
     let tasksList:string[] = req.body
     datastore.removeTasksFromCategory(categoryID, tasksList)
     .then(()=>{
       res.send(tasksList + ' was removed from the DB')
     }).catch(()=>{
       res.send(tasksList + " was not removed from the DB")
     })
   }) 
  })
  .catch(e => {
    throw e;
  });