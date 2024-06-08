<script setup>
  import { useMovieStore } from "./stores//MovieStore";
  import Movie from "./components/Movie.vue";
  import Search from "./components/Search.vue";

  const movieStore = useMovieStore();

  const setTab = (id) => {
    movieStore.setActiveTab(id);
  };
</script>

<template>
  <main>
    <header class="header">
      <img
        src="/logo.svg"
        alt="logo"
        class="header-logo"
      />
      <h2>Мои любимые фильмы</h2>
    </header>

    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Избранное
      </button>

      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Просмотренные
      </button>

      <button
        :class="['btn', { btn_green: movieStore.activeTab === 3 }]"
        @click="setTab(3)"
      >
        Поиск
      </button>
    </div>

    <div
      v-if="movieStore.activeTab === 1"
      class="movies"
    >
      <div>
        <h3>Все фильмы (count: {{ movieStore.movies.length }})</h3>
        <Movie
          v-for="(movie, index) in movieStore.movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>

    <div
      v-if="movieStore.activeTab === 2"
      class="movies"
    >
      <div>
        <h3>
          Просмотренные фильмы (count:
          {{ movieStore.watchedMovies.length }})
        </h3>
        <Movie
          v-for="(movie, index) in movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>

    <div
      v-if="movieStore.activeTab === 3"
      class="search"
    >
      <Search />
    </div>
  </main>
</template>

<style lang="css">
  html {
    scrollbar-gutter: stable;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .header-logo {
    max-width: 50px;
    margin-right: 10px;
  }
  .btn {
    border: none;
    width: auto;
    min-width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    background: #efefef;
  }
  .btn:hover {
    opacity: 0.7;
  }
  .btn_green {
    background: #37df5c;
  }

  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
</style>
