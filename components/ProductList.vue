<template>
  <div>{{ $props.propsData }}</div>
</template>

<script>
// import axios from 'axios'
export default {
  props: {
    propsData: {
      type: Array,
      default: () => [],
    },
  },
  // this는 사용하지 못함 왜냐 이건 페이지 진입하기 전에 호출됨
  // 조심해야 할건 이게 잘못되면 아예 페이지 진입이 안됨
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response)
  //   const products = response.data
  //   return { products } // { products: products } 축약형
  // },
}
</script>

<style></style>
