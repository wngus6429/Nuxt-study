<template>
  <main>
    <header class="title">
      <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
      <!-- <h1>{{ $route.name }}</h1>
      <h3>{{ $route }}</h3> -->
      <!-- <NuxtLink to="/">루트홈페이지</NuxtLink>
      <NuxtLink to="/product">상품홈페이지</NuxtLink> -->
      <!-- <router-link></router-link> 라우터링키는 vue-router기법-->
    </header>
    <Nuxt />
  </main>
</template>

<script>
export default {
  // created() {
  //   console.log('왓')
  // },
}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
