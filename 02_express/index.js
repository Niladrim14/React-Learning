import express from 'express';

const app = express();
const port = 3000;
 
app.use(express.json());

let items = [];
let id = 1;

app.post('/items', (req, res) => {
  const item = { id: id++, name: req.body.name, price: req.body.price };
  items.push(item);
  res.status(201).send(item);
});

app.get('/items', (req, res) => {
  res.send(items);
});

app.get('/items/:id', (req, res) => {
 const item = items.find(item => item.id === parseInt(req.params.id));  
    if (!item) return res.status(404).send({ error: 'Item not found' });

    res.send(item);
});
app.put('/items/:id', (req, res) => {
    const item = items.find(item => item.id === parseInt(req.params.id))
if (!item) return res.status(404).send({ error: 'Item not found' }); 

    item.name = req.body.name;
    item.price = req.body.price;
    res.send(item);
});

app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(item => item.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send({ error: 'Item not found' });
    const deletedItem = items.splice(itemIndex, 1);
    res.send(deletedItem[0]);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 


 