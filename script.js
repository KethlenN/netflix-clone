const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFiMjNiNjJhMmE4YTBkZDhkMTZhYWVmMTU0ZjM3MyIsIm5iZiI6MTc3NzA1MTkxMy45LCJzdWIiOiI2OWViYTkwOTljOTk4ODMwNTlkNDgzODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RnWia2POc1yDhJuOq2GF8MT2CUoijPjMemDW6PgR7ho";

fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27', {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
})
.then(res => res.json())
.then(data => {
  const moviesDiv = document.getElementById('movies');

  data.results.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie');

    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
    `;

    moviesDiv.appendChild(div);
  });
});
