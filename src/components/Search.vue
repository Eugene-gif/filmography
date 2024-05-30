<script setup>
  import { ref } from "vue";
  import { useSearchStore } from "../stores/SearchStore";

  import MovieNew from "./MovieNew.vue";
  import Loader from "./Loader.vue";

  const searchStore = useSearchStore();
  const searchMovie = ref();
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      v-model="searchMovie"
      type="text"
      class="search-input"
      placeholder="Название фильма"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <MovieNew
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
      isSearch
    />
  </div>
</template>

<style lang="css" scoped>
  .search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 0.3px;
    &::placeholder {
      color: #e7e7e7;
    }
  }
</style>
