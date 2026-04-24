const apiKey = "61ab23b62a2a8a0dd8d16aaef154f373";

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`)
  .then(res => res.json())
  .then(data => {
    const filmesDiv = document.getElementById("filmes");

    data.results.forEach(filme => {
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      filmesDiv.appendChild(img);
    });
  });
