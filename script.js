const apiKey = "61ab23b62a2a8a0dd8d16aaef154f373";

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`)
  .then(res => res.json())
  .then(data => {

    const filmesDiv = document.getElementById("filmes");

    // MOSTRAR FILMES
    data.results.forEach(filme => {
      if (filme.poster_path) {
        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
        filmesDiv.appendChild(img);
      }
    });

    // BANNER
    const filme = data.results[0];

    document.getElementById("banner").style.backgroundImage =
      `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`;

    document.getElementById("titulo").innerText = filme.title;
    document.getElementById("descricao").innerText = filme.overview;

  });
