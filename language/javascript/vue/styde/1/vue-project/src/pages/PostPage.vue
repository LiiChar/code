<script>
import ListPost from '../components/ListPost.vue';
import FormCreatePost from '../components/FormCreatePost.vue';
import axios from 'axios';
export default {
  components: {
    ListPost,
    FormCreatePost
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' },
        { value: 'id', name: 'По индефикатору' },
      ],
    }

  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },

    deletePost(id) {
      console.log(id);
      this.posts = this.posts.filter((el) => el.id !== id)
    },

    updatePost() {

    },
    // changePage(newPage) {
    //   this.page = newPage;
    // },  
    showDilalog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
        this.isPostLoading = true
      } catch (error) {
        alert('Error');
      }
    },
    async loadMorePost() {
      this.page++

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
        this.isPostLoading = true
      } catch (error) {
        alert('Error');
      }
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
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  watch: {
    // selectedSort() {
    //   this.posts.sort((postA, postB) => {
    //     if (this.selectedSort === 'id') {
    //       return postA['id'] - postB['id'];
    //     }
    //     return postA[this.selectedSort]?.localeCompare(postB[this.selectedSort])
    //   })
    // }
    // page () {
    //   this.fetchPosts();
    // }
  },
  computed: {
    filterArray() {
      return [...this.posts].sort((postA, postB) => {
        if (this.selectedSort === 'id' && this.page < this.totalPages) {
          return postA['id'] - postB['id'];
        }
        return postA[this.selectedSort]?.localeCompare(postB[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.filterArray.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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
    <my-input v-model="searchQuery" placeholder="Поисковая строка"
      style="margin-bottom: 10px; margin-top: 10px; width: 80%;" />

    <list-post v-if="isPostLoading" @delete="deletePost" :posts="sortedAndSearchedPosts" />
    <div v-else>
      Посты загружаются
    </div>
    <div ref="observer" class="observer">

    </div>
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