<script>
import ListPost from '../components/ListPost.vue'
import FormCreatePost from '../components/FormCreatePost.vue'
import axios from 'axios'
import MyButton from '../components/ui/MyButton.vue'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  components: {
    ListPost,
    FormCreatePost,
    MyButton
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage'
    }),
    ...mapActions({
      loadMorePost: 'post/loadMorePost',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },

    deletePost(id) {
      console.log(id)
      this.posts = this.posts.filter((el) => el.id !== id)
    },

    updatePost() {},
    // changePage(newPage) {
    //   this.page = newPage;
    // },
    showDilalog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchPosts()
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.loadMorePost()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  watch: {
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      filterArray: 'post/filterArray',
      sortedAndSearchedPosts: 'post/filterArray'
    })
  }
}
</script>

<template>
  <div>
    <my-dialog v-model:show="dialogVisible">
      <form-create-post @create="createPost" />
    </my-dialog>
    <h1>Страница с постами</h1>
    <div class="buttonList">
      <my-button @click="showDilalog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-input
      v-model="searchQuery"
      placeholder="Поисковая строка"
      style="margin-bottom: 10px; margin-top: 10px; width: 80%"
    />

    <list-post v-if="isPostLoading" @delete="deletePost" :posts="$store.getters.post" />
    <div v-else>Посты загружаются</div>
    <div ref="observer" class="observer"></div>
    <!-- <div class="pages_wrapper">
      <div @click="changePage(page_num)" :class="{
        'current_page': page === page_num
      }" v-for="page_num in totalPages">
        {{ page_num }}
      </div>
    </div> -->
  </div>
</template>

<style>
.buttonList {
  display: flex;
  justify-content: space-between;
}

.pages_wrapper {
  margin: 15px 30px 15px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.pages_wrapper div {
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
}

.current_page {
  color: blue;
  border: 2px solid blue;
}

.observer {
  height: 30px;
  background-color: grey;
}
</style>
