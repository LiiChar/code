<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
.btn {
    box-sizing: border-box;
  width: 100px;
  height: 30px;
  border: 2px solid black;
  outline: none;
}
</style>