import express from "express";

const app = express();
app.use(express.json());

let movieList = [];

//app.get("/say-hello", (req, res) => {
//  return res.status(200).send("hello");
//});

//add movie

app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  movieList.push(newMovie);
  return res.status(200).send({ message: "Movie is added sucessful" });
});

app.get("/movie/add", (req, res) => {
  return res.status(200).send({ message: "sucess", movies: movieList });
});

app.delete("/movie/delete", (req, res) => {
  const movieNameToBeDeleted = req.body.name;
  const requiredMovie = movie.find((item) => {
    if (item.name === movieNameToBeDeleted) {
      return item;
    }
  });
});
if (!requiredMovie) {
  return res.status(404).send({ message: "Movie not found" });
}
const newMovieList = movieList.filter((item, index, array) => {
  if (item.name !== movieNameToBeDeleted) {
    return item;
  }
});
