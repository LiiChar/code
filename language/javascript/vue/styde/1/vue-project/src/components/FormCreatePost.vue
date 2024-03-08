<template lang="">
  <form class="form" action="">
    <div style="display: flex; flex-direction: column">
      <label for="title">Название поста</label>
      <my-input v-focus v-model="post.title" id="title" type="text" />
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      <label for="body">Текст поста</label>
      <my-input v-model="post.body" id="body" type="text" />
      <my-button style="align-self: flex-end; margin-top: 10px" @click="createPoster"
        >Создать</my-button
      >
    </div>
  </form>
</template>
<script>
export default {
  methods: {
    createPoster(e) {
      e.preventDefault()
      const id = Date.now()
      const newPost = { id: id, title: this.post.title, body: this.post.body }
      this.$emit('create', newPost)
      this.post.title = ''
      this.post.body = ''
    }
  },
  data() {
    return {
      post: {
        title: '',
        text: ''
      }
    }
  }
}
</script>
<style scoped>
.form {
  margin: 20px;
}
</style>
