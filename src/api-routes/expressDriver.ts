import * as exp from 'express'; 
import * as body from 'body-parser';
import {mainPage} from './main-page'
import {getTasks,postTasks,updateTask,deleteTask} from './task-controller'
import {getCategories,postCategory,deleteCategory,updateCategory,addTaskstoCategory,removeTasksFromCategory} from './categories-controller'
const app = exp();

export class expressDriver{
  
    
    constructor(){
        
    }
  
   static startDriver(){
    
    app.listen(4000); 
    app.use(body.json())
    //get the welcome page..
    app.get('/', mainPage)
    //get the tasks list...
    app.get('/api/tasks', getTasks )
    //post tasks to DB
    app.post('/api/tasks', postTasks )
    //delete task from DB
    app.delete('/api/tasks/:_id' , deleteTask) 
    //update task in DB 
    app.put('/api/tasks/:_id' , updateTask)

    //get categories
      app.get('/api/categories', getCategories )
    //post categories
      app.post('/api/categories', postCategory)
    //delete categories
      app.delete('/api/categories/:_id', deleteCategory)
    //update category 
      app.put('/api/categories/:_id', updateCategory)
    //add tasks to category
      app.patch('/api/categories/:_id', addTaskstoCategory)
    //remove tasks from category
      app.delete('/api/categories/update/:_id', removeTasksFromCategory)
    
  }
}
