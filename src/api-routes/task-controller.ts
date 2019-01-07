import {Request, Response} from 'express'
import {myData} from '../app'
import * as body from 'body-parser';


export let getTasks = async (req:Request,res:Response)=>{
  let tasks = await myData.listTasks()
     res.send(tasks)
       
}

export let postTasks = async (req:Request,res:Response)=>{
    let task = req.body;
        
      await myData.createTask(task)
     res.send('it worked')
}

export let updateTask = async (req:Request, res:Response)=>{
    let update = req.body + req.params._id; 
    let updateable = req.params.id;
  await  myData.updateTask(update)

   res.send('task updated')
   
}

export let deleteTask = async(req:Request, res:Response)=>{
    var id = req.params._id; 
    await myData.deleteTask(id)

    res.send('task should be deleted')
}
