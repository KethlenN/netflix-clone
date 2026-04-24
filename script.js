const apiKey = "61ab23b62a2a8a0dd8d16aaef154f373";

app.get('/filmes', async (req, res) => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=SUA_KEY&with_genres=27');
  const data = await response.json();
  res.json(data);
});

fetch('/filmes')
