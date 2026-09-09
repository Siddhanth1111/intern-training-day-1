const express = require('express');
const app = express();

const todos = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json());

// app.post('/create',(req,res)=> {
//   const body = req.body;
//   todos.push(body);
//   res.json({message: 'Todo created successfully'});
// });

// app.get('/todos', (req, res) => {
//   res.json(todos);
// });

// app.put('/update/:id', (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   todos[id] = body;
//   res.json({message: 'Todo updated successfully'});
// });

// app.delete('/delete/:id', (req, res) => {
//   const id = req.params.id;
//   todos.splice(id, 1);
//   res.json({message: 'Todo deleted successfully'});
// });

app.listen(3000);
