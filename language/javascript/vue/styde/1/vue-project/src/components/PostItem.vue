<template lang="">
    <div>
        <div>
          <strong>{{ post.title }} {{ $store.state.likes }}</strong>
        </div>
        <div>
          {{ post.body }}
        </div>
        <div>
          <button @click="() => updatePost(post.id)">Изменить</button>
          <button @click="() => deletePost(post.id)" style="margin-left: 5px; outline: none; ;">Удалить</button>
        </div>
        <my-button style="margint-top: 10px" @click="() => $router.push(`/post/${post.id}`)">Узнать больше</my-button>
    </div>
</template>
<script>
export default {
    methods: {
        deletePost(id) {
            this.$emit('delete', id)
        }
    },
    props: {
        post: {
            type: Object,
            require: true
        }
    }
}
</script>
<style >
    
</style>