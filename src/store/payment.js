export const state = () => ({
  cards: [
    {
      id: 1
    },
    {
      id: 2
    }
  ],
})

export const mutations = {

}

export const actions = {

}

export const getters = {
  getCards(state) {
    return state.cards
  }
}