export const state = () => ({
  list: [],
  filter: {
    query: '',
    favorite: false,
  },
})

export const actions = {}

export const mutations = {
  set_pokemons: (state, pokemons) => {
    state.list = pokemons
  },
  SET_QUERY(state, query) {
    state.filter.query = query
  },
}

export const getters = {
  filterPokemons(state) {
    const pokemons = state.list
    if (state.filter.query.length >= 2) {
      return pokemons.filter((data) =>
        data.name.toLowerCase().includes(state.filter.query)
      )
    }
    return pokemons
  },
}
