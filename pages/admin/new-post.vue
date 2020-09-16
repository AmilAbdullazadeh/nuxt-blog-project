<template>
  <PostForm @submit="savePost($event)" />
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  methods: {
    savePost(post) {
      this.$store.dispatch("addPost", post)
      .then((res) => {
        this.$router.push("/admin")
      })
    },
  },
};
</script>