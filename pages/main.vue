<template>
  <div>
    <!-- <Logo /> -->
    <h1>메인페이지</h1>
    <p>메인페이지 시작합니다.</p>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product }}
          <img :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
    <!-- <ProductList :props-data="products" /> -->
    <!-- 확인용 {{ products }} -->
  </div>
</template>

<script>
import axios from 'axios'
// import ProductList from '../components/ProductList.vue'
export default {
  // components: { ProductList },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    // 배열에 map을 돌려서 변환
    // ... 풀어서 넣는거임
    const products = response.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    })
    return { products }
  },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
}
</script>

<style></style>
