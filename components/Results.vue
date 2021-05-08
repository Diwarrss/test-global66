<template>
  <b-container class="results">
    <b-row>
      <b-col v-if="!pokemons.length" cols="12" class="not_results text-center">
        <h2>Uh-oh!</h2>
        <p class="m-0">You look lost on your journey!</p>
        <b-link to="/" class="btn btn-danger">Go back home</b-link>
      </b-col>
      <b-col v-if="pokemons.length" cols="12" class="success_results p-0">
        <b-list-group class="text-center">
          <b-list-group-item
            v-for="(pokemon, index) in pokemons"
            :key="index"
            button
            class="text-capitalize"
            @click.prevent="showPokemon(pokemon.name)"
            >{{ pokemon.name }}
            <b-button class="add_favorite">
              <img src="img/icon-favorite-gray.svg" alt="add-favorite" />
            </b-button>
          </b-list-group-item>
          <!-- <b-list-group-item button
            >Button item
            <b-button class="add_favorite">
              <img src="img/icon-favorite-gray.svg" alt="add-favorite" />
            </b-button>
          </b-list-group-item> -->
        </b-list-group>
      </b-col>
    </b-row>
    <!-- Modal show Result-->
    <div class="modal_pokemon">
      <b-modal
        id="modalPokemon"
        ref="modalPokemon"
        hide-footer
        hide-header
        centered
      >
        <div class="img_content">
          <img src="/img/background.png" class="lazyload lazy" />
          <div class="img_pokemon">
            <img :src="dataPokemon.image" class="lazyload lazy" />
          </div>
          <div class="close_modal">
            <b-button class="p-0" @click.prevent="closeModal()">
              <img src="/img/close.svg" alt="close" />
            </b-button>
          </div>
        </div>
        <div class="desc_content">
          <b-list-group>
            <b-list-group-item>
              <span>Name: </span> {{ dataPokemon.name }}
            </b-list-group-item>
            <b-list-group-item>
              <span>Weight: </span> {{ dataPokemon.weight }}
            </b-list-group-item>
            <b-list-group-item>
              <span>Height: </span> {{ dataPokemon.height }}
            </b-list-group-item>
            <b-list-group-item>
              <span>Types: </span> {{ dataPokemon.types }}
            </b-list-group-item>
          </b-list-group>
          <div class="footer d-flex justify-content-between">
            <input v-model="descPokemon" class="description-pokemon" />
            <b-button class="btn_share btn btn-danger" @click="doCopy">
              Share to my friends
            </b-button>
            <b-button class="btn_favorite">
              <img src="img/icon-favorite-yellow.svg" alt="favorite-white" />
            </b-button>
          </div>
        </div>
      </b-modal>
    </div>
  </b-container>
</template>
<script>
export default {
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataPokemon: {
        image: '',
        name: '',
        weight: '',
        height: '',
        types: '',
      },
    }
  },
  computed: {
    descPokemon() {
      return `Name: ${this.dataPokemon.name}, Weight: ${this.dataPokemon.weight}, Height: ${this.dataPokemon.height}, Types: ${this.dataPokemon.types}`
    },
  },
  methods: {
    showPokemon(name) {
      const me = this
      document.getElementById('page_search').classList.add('d-none')
      this.$nuxt.$loading.start()
      this.$axios
        .get(`pokemon/${name}`)
        .then((res) => {
          const pokemon = res.data
          const types = pokemon.types.map((ty) => {
            return ty.type.name
          })
          me.dataPokemon.image = pokemon.sprites.other.dream_world.front_default
          me.dataPokemon.name = name
          me.dataPokemon.weight = pokemon.weight
          me.dataPokemon.height = pokemon.height
          me.dataPokemon.types = types.join(', ')
          this.$refs.modalPokemon.show()
          document.getElementById('page_search').classList.remove('d-none')
          this.$nuxt.$loading.finish()
        })
        .catch((err) => {
          console.error(err)
        })
    },
    closeModal() {
      this.$refs.modalPokemon.hide()
    },
    doCopy() {
      const input = document.querySelector('.description-pokemon')
      input.select()
      try {
        document.execCommand('copy')
        this.$bvToast.toast('Pokemon en portapeles!', {
          title: 'Info',
          autoHideDelay: 3000,
          appendToast: false,
          variant: 'success',
        })
      } catch (err) {
        console.log('Oops, unable to copy')
      }
    },
  },
}
</script>
<style lang="scss">
.results {
  padding-bottom: 100px;
  .not_results {
    padding-top: 50px;
    h2 {
      @include font-bold();
      margin-bottom: 10px;
      font-size: 36px;
      line-height: 43px;
    }
    p {
      color: #5e5e5e;
      font-size: 20px;
      line-height: 150%;
    }
    .btn-danger {
      margin-top: 25px;
      width: 155px;
      @include btn-pokedex();
    }
  }
  .success_results {
    .list-group {
      margin-top: 40px;
      align-items: center;
      .list-group-item {
        padding: 8px 8px 8px 20px;
        max-width: 570px;
        margin: 5px 0;
        background: #ffffff;
        border-radius: 5px;
        border: none;
        color: #353535;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add_favorite {
          background-color: #f5f5f5;
          border: none;
          border-radius: 50%;
          height: 44px;
          width: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 26px;
            width: 26px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.modal-content {
  width: 570px;
  border-radius: 5px;
  .modal-body {
    width: 570px;
    padding: 0;
    @media (max-width: 576px) {
      width: auto;
    }
    .img_content {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 220px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .img_pokemon {
        position: absolute;
        img {
          padding: 20px 0;
        }
      }
      .close_modal {
        position: absolute;
        right: 10px;
        top: 10px;
        .btn {
          background-color: transparent;
          border: unset;
        }
        img {
          width: 26px;
          height: 26px;
        }
      }
    }
    .desc_content {
      padding: 20px 30px;
      .list-group {
        font-size: 18px;
        line-height: 150%;
        color: #5e5e5e;
        .list-group-item {
          padding: 10px 0;
          border: none;
          border-bottom: 1px solid #e8e8e8;
          border-radius: unset;
          span {
            @include font-bold();
          }
        }
      }
      .footer {
        padding-top: 20px;
        .description-pokemon {
          position: absolute;
          top: 5000px;
        }
        .btn_share {
          @include btn-pokedex();
          width: 195px;
        }
        .btn_favorite {
          background-color: #f5f5f5;
          border: none;
          border-radius: 50%;
          height: 44px;
          width: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 26px;
            width: 26px;
          }
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 570px;
  }
}
</style>
