<template>
  <div id="home" class="home d-none">
    <div>
      <Logo />
      <h1 class="title">Welcome to Pokédex</h1>
      <p class="description">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <b-link to="search" class="btn btn-danger">Get started</b-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        document.getElementById('home').classList.remove('d-none')
      }, 1000)
    })
  },
}
</script>
<style lang="scss">
.home {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    @include font-bold();
    font-size: 100px;
    color: #353535;
    font-size: 26px;
    line-height: 31px;
    padding-top: 60px;
  }

  .description {
    padding-top: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #5e5e5e;
    max-width: 570px;
  }

  .btn-danger {
    margin-top: 50px;
    width: 131px;
    height: 44px;
    background: #f22539;
    border-radius: 60px;
    font-size: 18px;
  }
}
</style>
