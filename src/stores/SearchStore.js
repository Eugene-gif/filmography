import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from 'vue';

const url = `${import.meta.env.VITE_API_URL}?page=1&limit=20&query=`;

// _____ Composition api _____
export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`, {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY
      }
    })

    const data = await res.json();

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

    const movieStore = useMovieStore();

    if (movieStore.movies && movies.value) {
      movies.value.filter((obj) => movieStore.movies.forEach((obj2) => {
        if (obj.id === obj2.id) obj.added = true;
      }));
    }

    loader.value = false;
  }

  const addMovies = (obj) => {
    const movieStore = useMovieStore();
    const finded = movieStore.movies.find((el) => obj.id === el.id);
    if (finded) {
      console.log('Уже добавлен!');
      console.log(finded);
      obj.isWatched = false;
      return obj;
    }
    movieStore.movies.push({ ...obj, isWatched: false });
  }

  return {
    loader, movies, getMovies, addMovies
  }
})
