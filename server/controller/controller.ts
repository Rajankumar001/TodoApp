import express,{ Request, Response } from 'express';
import ToDo from '../models/schema';

const getTodo =  async(req: Request, res: Response) => {
  try {
    const todos = await ToDo.find({});
    res.json({ status: 'success', data: todos });
  } catch (err) {
    console.error('Error fetching todos:', err);
  }  

}

const saveTodo = (req: Request, res: Response) => {
  const { toDo } = req.body; 
  // ToDo.create( {toDo} )
  const todo= new ToDo({
    toDo:toDo,
  })
  todo.save().then((data) => {
          console.log("Data saved successfully");
          res.json(data);
      })
      .catch((err) => {
          console.error('Error saving todo:', err);
          res.status(500).json({ error: "Failed to save todo" });
      });
  
};


const updateTodo =  (req: Request, res: Response) => {
  
    const { id } = req.params;
    const { toDo } = req.body;
    ToDo.findByIdAndUpdate(id,{ $set: { toDo: toDo } }, { new: true }).then(()=>{
    console.log("updated successfully");
    })
  .catch ((err)=> {
    console.error('Error updating todo:', err);
   
  })
}

const deleteTodo = (req: Request, res: Response) => {
     const { id } = req.params;
    ToDo.findByIdAndDelete(id).then(()=>{
      console.log("deleted successfully.....");
    }).catch ((err)=>{
    console.error('Error deleting todo:', err);
  })
}

export  { getTodo, saveTodo, updateTodo, deleteTodo };
