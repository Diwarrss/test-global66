<template>
  <div>
    <b-container id="page_search" class="page_search">
      <b-row>
        <b-col cols="12 d-flex justify-content-center">
          <b-input-group class="input_search">
            <template #prepend>
              <b-input-group-text>
                <img src="img/icon-search.svg" alt="search" />
              </b-input-group-text>
            </template>
            <b-form-input
              id="input-search"
              v-model="search"
              placeholder="Search"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <Results :pokemons="filterPokemons" />
    </b-container>
    <Buttons v-if="filterPokemons.length" />
  </div>
</template>
<script>
import Results from '@/components/Results'
import Buttons from '@/components/ButtonsFooter'
export default {
  components: {
    Results,
    Buttons,
  },
  async asyncData({ app, store }) {
    const { data } = await app.$axios.get('pokemon')
    store.commit('pokemons/set_pokemons', data.results)
    return {
      pokemons: data,
    }
  },
  computed: {
    search: {
      get() {
        return this.$store.state.pokemons.filter.query
      },
      set(val) {
        this.$store.commit('pokemons/SET_QUERY', val)
      },
    },
    filterPokemons() {
      return this.$store.getters['pokemons/filterPokemons']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      document.getElementById('page_search').classList.add('d-none')
      document.getElementById('footer').classList.add('d-none')
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        document.getElementById('page_search').classList.remove('d-none')
        document.getElementById('footer').classList.remove('d-none')
      }, 500)
    })
  },
}
</script>
<style lang="scss">
.page_search {
  .input_search {
    margin-top: 35px;
    max-width: 570px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    border: none;
    input {
      height: 50px;
    }
    .input-group-text {
      background: #ffffff;
      border: none;
    }
    .form-control {
      background: #ffffff;
      border: none;
    }
  }
}
</style>
