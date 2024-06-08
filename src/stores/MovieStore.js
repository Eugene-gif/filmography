import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

// _____ Options api _____
// export const useMovieStore = defineStore('movieStore', {
//   state: () => ({
//     movies: [],
//     activeTab: 2,
//   }),

//   // Getters рекомендуется использовать тогда, когда мы хотим что-то изменить
//   getters: {
//     watchedMovies() {
//       return this.movies.filter((el) => el.isWatched)
//     },
//   },

//   // Actions - используется для изменения какого-нибудь состояния(state)
//   // mutations - убрали, и в pinia для синхронных и ассинхронных операций используются actions.
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id;
//     },
//     toggleWatched(id) {
//       const idx = this.movies.findIndex(el => el.id === id);
//       this.movies[idx].isWatched = !this.movies[idx].isWatched;
//     },
//     deleteMovie(id) {
//       this.movies = this.movies.filter(el => el.id !== id);
//     }
//   }
// });


// _____ Composition api _____
export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(1);
  const moviesStorage = localStorage.getItem('movies');

  if (moviesStorage) {
    movies.value = JSON.parse(moviesStorage)._value;
  }

  const watchedMovies = computed(() => {
    return movies.value.filter((el) => el.isWatched)
  });

  const setActiveTab = (id) => {
    activeTab.value = id;
  }

  const toggleWatched = (id) => {
    const idx = movies.value.findIndex(el => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  }

  const deleteMovie = (id) => {
    movies.value = movies.value.filter(el => el.id !== id);
  }

  watch(() => movies, (state) => {
    localStorage.setItem('movies', JSON.stringify(state))
  }, { deep: true });

  return {
    movies,
    activeTab,
    watchedMovies,
    setActiveTab,
    toggleWatched,
    deleteMovie
  }
})
