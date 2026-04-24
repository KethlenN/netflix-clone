body {
  background-color: #111;
  color: white;
  font-family: Arial, sans-serif;
}

.logo {
  color: red;
}

.navbar {
  padding: 20px;
}

.banner {
  height: 300px;
  background: url('https://via.placeholder.com/800x300') center/cover;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.row-posters {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}

.row-posters img {
  width: 150px;
  transition: transform 0.3s;
}

.row-posters img:hover {
  transform: scale(1.1);
}
