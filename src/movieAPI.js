function searchTitle(query) {
  return fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      query +
      "&api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US&page=1&include_adult=false",
    {}
  ).then((res) => res.json());
}

function getTitleDetails(id) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US",
    {}
  ).then((res) => res.json());
}

export default { searchTitle, getTitleDetails };
