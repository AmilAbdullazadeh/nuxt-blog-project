<template>
  <PostForm
      @submit="updatePost($event)"
      :post="fetchedPosts"
      :isUpdate="true" />
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  asyncData(ctx) {
    return axios.get("https://nuxt-project-dallas.firebaseio.com/posts/" + ctx.params.postId + ".json")
    .then(res => {
      return {
        fetchedPosts: res.data
      }
    })
  },
  methods: {
    updatePost(editedPost) {
      this.$store.dispatch("updatePost", { ...editedPost, id: this.$route.params.postId })
      .then(res => {
        this.$router.push("/admin")
      })
    }
  }
};
</script>