import {Request,Response} from 'express';

export let mainPage = (req:Request, res:Response)=>{
        res.send('Welcome to the Task/Categories API!!')
      }
