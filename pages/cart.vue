<template>
  <div>
    <h1>카트페이지</h1>
    <div>
      <ul>
        <!-- cartItem안에 id가 있기 때문에 :key에 id바로 해도됨 -->
        <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
          {{ cartItem }}
          <img :src="cartItem.imageUrl" :alt="cartItem.name" />
          <p>{{ cartItem.name }}</p>
        </li>
      </ul>
    </div>
    <div>
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
