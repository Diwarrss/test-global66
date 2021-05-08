<template>
  <div v-if="loading" class="container loading">
    <img src="img/loader.svg" alt="pokeball" class="pokeball" />
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style lang="scss">
.loading {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* AnimationFrames */
.pokeball {
  animation: 1s appear;
  margin: auto;
  animation: frames 0.8s linear 0s infinite;
}

@keyframes frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
