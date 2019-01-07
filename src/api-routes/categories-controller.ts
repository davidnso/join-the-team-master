import {Request, Response} from 'express'
import {myData} from '../app'

export let getCategories = async (req:Request,res:Response)=>{
  const categories = await myData.listCategories()
   res.send(categories)
  }
  
export let postCategory = async(req:Request,res:Response)=>{
    let Category = req.body; 
       await myData.createCategory(Category)
        res.send('it worked')
}

export let updateCategory = async(req:Request, res:Response)=>{
    let updateID = req.params._id;
        let updateName = req.body; 
       await myData.updateCategory(updateID, updateName)
       res.send('category updated.')
}

export let deleteCategory = async(req:Request, res:Response)=>{
    let deleteThis = req.params._id; 
     await  myData.deleteCategory(deleteThis)
       res.send('category deleted.')
}
export let addTaskstoCategory = async (req:Request, res:Response)=>{
    let categoryID = req.params._id
        var tasksList:string[] = req.body
        await myData.addTasksToCategory(categoryID , tasksList)
         res.send('tasks added to category.')
}
export let removeTasksFromCategory = async (req:Request, res:Response)=>{
    let categoryID = req.params._id; 
        let tasksList:string[] = req.body
       await myData.removeTasksFromCategory(categoryID, tasksList)
       res.send('tasks deleted from category.')
    
}