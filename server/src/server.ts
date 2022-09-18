import express, { response } from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.json([]);
});

app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;
  
  return response.send([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
    {id: 4, name: 'Anúncio 4'},
  ]);
});

app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id;

  return response.json([]);
});

// localhost:3333/ads
app.listen(3333);
