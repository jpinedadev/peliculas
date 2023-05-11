// const API = "https://api.themoviedb.org/3";
//
// export function get(path){
//   return fetch(API + path, {
//     headers: {
//       Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYzMWVmODEzZGJlMjk5YjZkMWExZDMwZmIyN2ZiYyIsInN1YiI6IjY0M2UwOTE2YzYwMDZkMDQ4MTgwNjJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSF1gTZECDKzZ0cGe1veOJyY6F0hITyS73n0bmnCA9w",
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   }).then((result)=>result.json());
// }
//
const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
