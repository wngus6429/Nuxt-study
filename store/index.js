import { fetchCartItems } from '~/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItems) {
    const newCartItem = {
      // 스프데어 오퍼레이터 , 20개든 30개든, 밑에 부분만 바꿔준다는거
      ...cartItems,
      imageUrl: `${cartItems.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
  setCartItem(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  // 동적 키 값 정의 방식 , ES6
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit(
      'setCartItem',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
  // 컨텍스트가 2개 들어옴.
  // 이거는 asyncData보다 전에 store초기화 라고 보면됨
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  // const { data } = await fetchCartItems()
  // storeContext.commit(
  //   'setCartItem',
  //   data.map((item) => ({
  //     ...item,
  //     imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  //   }))
  // )
  // },
}
