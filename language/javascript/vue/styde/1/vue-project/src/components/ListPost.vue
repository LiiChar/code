<template lang="">
  <div v-if="posts.length > 0">
    <div>
      <h3>Список постова</h3>
      <transition-group name="post">
        <div :key="post.id" v-for="post in posts" class="post">
          <post-item :key="post.id" @delete="deletePost" :post="post" />
        </div>
      </transition-group>
    </div>
  </div>
  <h2 v-else>Список постов пусть</h2>
</template>
<script>
import PostItem from './PostItem.vue'

export default {
  methods: {
    deletePost(id) {
      this.$emit('delete', id)
    }
  },
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.post {
  padding: 10px;
  border: 1px solid black;
  margin: 0 10px 0 10px;
  margin-top: 15px;
}

.post-item {
  display: inline-block;
  margin-right: 10px;
}
.post-enter-active,
.post-leave-active {
  transition: all 0.4s ease;
}
.post-move {
  transition: transform 0.8s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
