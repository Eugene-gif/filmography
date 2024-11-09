<script setup>
  const emit = defineEmits(["setTab"]);
  const props = defineProps({
    movieStore: Object,
  });
</script>

<template>
  <div class="tabs">
    <button
      :class="[
        'btn',
        { btn_green: props.movieStore.activeTab === 1 },
      ]"
      @click="$emit('setTab', 1)"
    >
      Избранное
    </button>

    <button
      :class="[
        'btn',
        { btn_green: props.movieStore.activeTab === 2 },
      ]"
      @click="$emit('setTab', 2)"
    >
      Просмотрены
    </button>

    <button
      :class="[
        'btn',
        { btn_green: props.movieStore.activeTab === 3 },
      ]"
      @click="$emit('setTab', 3)"
    >
      Непросмотрены
    </button>

    <button
      :class="[
        'btn',
        { btn_green: props.movieStore.activeTab === 4 },
      ]"
      @click="$emit('setTab', 4)"
    >
      Поиск
    </button>
  </div>
</template>

<style lang="css" scoped>
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 20px;

    .btn {
      border: none;
      width: auto;
      min-width: 100px;
      height: 35px;
      font-size: 14px;
      border-radius: 8px;
      cursor: pointer;
      background: #efefef;
    }

    .btn_green {
      background: #37df5c;
    }

    @media (hover: hover) {
      .btn:hover {
        opacity: 0.7;
      }
    }

    @media (width < 768px) {
      gap: 10px;
      flex-wrap: wrap;
      .btn {
        border-radius: 5px;
      }
    }
  }
</style>
