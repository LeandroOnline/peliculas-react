// import React from 'react';
const API = "http://api.themoviedb.org/3";

const Get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODFhOTUwMzMzYWQzMWZhODVhYjZmYzM4YjQ3Y2NmOCIsInN1YiI6IjYzOTYyYWM5ZDA1YTAzMDBmODU5YTYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsL4VoZ8ZGEaExb5t9v_a-LbdHjaXST5FKLdEsDmG1E",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};

export default Get;
