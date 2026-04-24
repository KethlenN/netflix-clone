fetch('https://seu-backend.com/filmes')
  .then(res => res.json())
  .then(data => console.log(data));
const API_KEY = process.env.API_KEY;
