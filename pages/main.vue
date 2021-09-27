<template>
  <div>
    <!-- <Logo /> -->
    <h1>메인페이지</h1>
    <p>메인페이지 시작합니다.</p>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
export default {
  components: { ProductList },
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response)
  //   const products = response.data
  //   return { products }
  // },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response)
  //   this.products = response.data
  // },
}
</script>

<style></style>
