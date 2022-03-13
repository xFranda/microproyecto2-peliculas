const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzNhOTQzMjU5YThhMWY0NjhjNDkwNWNhNzIwY2ZmNCIsInN1YiI6IjYyMmNjZjZhZWRhNGI3MDAxODMwNmE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IMw31jSjXmNW8-m9wwcuW2AVFe-V7KeOjI11bWkwOPc",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
