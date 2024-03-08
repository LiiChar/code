<template>
  <div class="navbar">
    <my-button @click="$router.push('/post')">Посты</my-button>
    <my-button @click="$router.push('/store')">Стор</my-button>

    <my-button @click="$router.push('/about')">О сайте</my-button>
    <my-button @click="$router.push('/')">Основаная страничка</my-button>
  </div>
</template>
<script>
export default {}
</script>
<style>
.navbar {
  height: 50px;
  display: flex;
  justify-content: space-around;
  color: lightgray;
  align-items: center;
  font-size: 14px;
  top: 0;
  left: 0;
  right: 0;
}
</style>
