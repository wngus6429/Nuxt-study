<template>
  <div class="list-wrapper">
    <ul>
      <!-- cartItem안에 id가 있기 때문에 :key에 id바로 해도됨 -->
      <li
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
        class="list-item"
      >
        <!-- {{ cartItem }} -->
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '~/store'
export default {
  // 당연히 작동 안됨
  //   async asyncData({ store }) {
  //     await store.dispatch(FETCH_CART_ITEMS)
  //   },
  // 일반 컴포넌트 에서는 asyncData말고 fetch를 써야한다
  async fetch() {
    // fetch는 this가 됩니다.
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 200px;
  height: 200px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
