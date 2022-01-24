<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <!-- 현재 input태그에 걸려 있는 value 값을 바꿀때마다 위로 올리겠다 -->
    <!-- 두번째 값을 payload 라고 한다 -->
    <button type="button" @click="$emit('search')">Search</button>
    <!-- @click에서 바로 적기보다 메서드로 뺴는게 좋긴함 -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
    // searchKeyword: {
    //   type: String,
    //   default: () => '',
    // },
  },
}
</script>

<style></style>
