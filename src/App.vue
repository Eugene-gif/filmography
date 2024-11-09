<script setup>
  import { useMovieStore } from "@/stores/MovieStore";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import MoviesList from "@/components/MoviesList.vue";
  import Search from "@/components/Search.vue";
  import Tabs from "@/components/Tabs.vue";

  const movieStore = useMovieStore();

  const setTab = (id) => {
    movieStore.setActiveTab(id);
  };
</script>

<template>
  <div class="wrapper">
    <Header />

    <main>
      <Tabs
        @setTab="setTab"
        :movieStore="movieStore"
      />

      <MoviesList
        v-if="movieStore.activeTab === 1"
        title="Все фильмы"
        :movies="movieStore.movies"
      />

      <MoviesList
        v-if="movieStore.activeTab === 2"
        title="Просмотренные фильмы"
        :movies="movieStore.watchedMovies"
      />

      <MoviesList
        v-if="movieStore.activeTab === 3"
        title="Непросмотренные фильмы"
        :movies="movieStore.unWatchedMovies"
      />

      <div
        v-if="movieStore.activeTab === 4"
        class="search"
      >
        <Search />
      </div>
    </main>

    <Footer />
  </div>
</template>

<style lang="css"></style>
