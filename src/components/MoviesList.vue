<script setup>
  import Movie from "./Movie.vue";

  const props = defineProps({
    movies: Array,
    title: String,
    isSearch: Boolean,
  });
</script>

<template>
  <div class="movies">
    <h3>{{ props.title }} (кол-во: {{ props.movies.length }})</h3>
    <div class="movies-list">
      <Movie
        v-for="(movie, index) in props.movies"
        :key="movie.id"
        :movie="movie"
        :isSearch="props.isSearch"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
  .movies-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(25% - 20px), 1fr)
    );
    column-gap: 20px;
    row-gap: 25px;
    justify-content: space-between;

    @media (width < 1100px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(calc(33% - 20px), 1fr)
      );
    }

    @media (width < 768px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(calc(50% - 20px), 1fr)
      );
    }

    @media (width < 490px) {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
</style>
