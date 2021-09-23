<template>
  <main>
    <header>
      <h1>{{ $route.name }}</h1>
      <h3>{{ $route }}</h3>
      <NuxtLink to="/">루트홈페이지</NuxtLink>
      <NuxtLink to="/main">메인홈페이지</NuxtLink>
      <NuxtLink to="/product">상품홈페이지</NuxtLink>
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
