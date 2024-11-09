<script setup>
  import { ref } from "vue";
  import { useSearchStore } from "@/stores/SearchStore";
  import MoviesList from "@/components/MoviesList.vue";
  import Loader from "@/components/Loader.vue";

  const searchStore = useSearchStore();
  const searchMovie = ref();

  const focus = ref(false);

  const clearSearch = () => {
    searchStore.movies = "";
    searchMovie.value = "";
  };
</script>

<template>
  <form
    @submit.prevent="
      searchMovie ? searchStore.getMovies(searchMovie) : ''
    "
  >
    <input
      v-model="searchMovie"
      type="text"
      class="search-input"
      placeholder="Название фильма"
      @focus="focus = true"
      @blur="focus = false"
    />
    <button
      class="search-btn"
      type="submit"
      :disabled="!searchMovie"
    >
      Найти
    </button>
  </form>

  <button
    v-if="searchStore.movies.length"
    @click="clearSearch"
    class="clear-btn"
  >
    Очистить поиск
  </button>

  <Loader v-if="searchStore.loader" />

  <MoviesList
    v-else-if="searchStore.movies.length && !searchStore.loader"
    title="Найденные фильмы"
    :movies="searchStore.movies"
    isSearch
  />
</template>

<style lang="css" scoped>
  form {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 10px;
  }

  .search-input {
    border: 1px solid #ede5e5;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
    letter-spacing: 0.3px;

    &::placeholder {
      color: #e7e7e7;
    }
  }

  .search-input:focus-visible {
    border: 1px solid #1eb4c3;
    border-right: none;
    outline: none;
  }

  .search-input:focus-visible ~ .search-btn {
    border: 1px solid #1eb4c3;
    border-left: none;
    outline: none;
  }

  .search-btn {
    width: 120px;
    height: 42px;
    border: none;
    background-color: #1eb4c3;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    border-radius: 0 10px 10px 0;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .clear-btn {
    display: block;
    margin-left: auto;
    width: auto;
    height: 30px;
    border: none;
    background-color: #ff2a2a;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  button[disabled] {
    background-color: #ede5e5;
    cursor: default;
    &:hover {
      opacity: 1;
    }
  }
</style>
