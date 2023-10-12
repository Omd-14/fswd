const express = require('express'); 
const app = express(); 
const port = 3000; 
let items = [
  { id: 1, name: 'Vishwa', price: 37, },
  ];
  app.use(express.json()); 
  app.post('/items', 
  (req, res) => {
  // const id = req.body.id;
  // res.json(id);
  const { id, name, price } = req.body;
   if (!name || !id || !price) { return res.status(400).json({
  error: `Invalid Input....
  ${name + id + price}`
  });
  }
  const newItem = { id, name, price };
   items.push(newItem); res.json(newItem); 
   console.log(newItem);
  });
  app.get('/items', (req, res) => {
  res.json(items);
  // console.log(items);
  });
  app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id); const item = items.find(item => item.id === id); if (item) { res.json(item);
  } else { res.status(404).json({ error: 'Item not found' });
  }
  });
  app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const { name, description } = req.body; 
  const itemIndex = items.findIndex(item => item.id === id); 
  if (itemIndex !== -1) {
  items[itemIndex] = { ...items[itemIndex], name, description }; 
  res.json(items[itemIndex]);
  } else { res.status(404).json({ error: 'Item not found' });
  }
  });
  app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
   items = items.filter(item => item.id !== id);
   res.json({ message: 'Item deleted successfully' });
  }); 
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });
  