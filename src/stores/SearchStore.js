import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from 'vue';

const url = "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=";

// _____ Options api _____
// export const useSearchStore = defineStore('searchStore', {
//   state: () => ({
//     loader: false,
//     movies: []
//   }),

//   actions: {
//     async getMovies(search) {
//       this.loader = true;
//       const res = await fetch(`${url}${search}`, {
//         headers: {
//           'X-API-KEY': 'T4Z1TPA-PAT4SN1-PW58S2K-J4400F0'
//         }
//       })
//       const data = await res.json();
//       console.log('Data: ', data);
//       this.movies = data.docs.map((obj) => {
//         return {
//           id: obj.id,
//           name: obj.name,
//           img: obj.poster.previewUrl,
//           rating: obj.internalRating,
//           description: obj.description,
//           short_description: obj.shortDescription,
//           year: obj.year
//         }
//       });

//       console.log('Movies: ', this.movies);
//       this.loader = false;
//     },
//     addMovies(obj) {
//       const movieStore = useMovieStore();
//       movieStore.movies.push({ ...obj, isWatched: false });
//       movieStore.activeTab = 1;
//       console.log(obj);
//     }
//   }
// });

// _____ Composition api _____
export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`, {
      headers: {
        'X-API-KEY': 'T4Z1TPA-PAT4SN1-PW58S2K-J4400F0'
      }
    })
    const data = await res.json();
    // console.log('Data: ', data);
    movies.value = data.docs.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        img: obj.poster.previewUrl,
        rating: obj.internalRating,
        description: obj.description,
        short_description: obj.shortDescription,
        year: obj.year
      }
    });

    console.log('Movies: ', movies.value);
    loader.value = false;
  }

  const addMovies = (obj) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...obj, isWatched: false });
    movieStore.activeTab = 1;
    console.log(obj);
  }

  return {
    loader, movies, getMovies, addMovies
  }
})
