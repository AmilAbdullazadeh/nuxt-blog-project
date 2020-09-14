<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post :post="post" v-for="(post, id) in posts" :key="id" :isAdmin="isAdmin" />
  </div>
</template>

<script>
import Post from "@/components/post/Post";

export default {
  components: {
    Post,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      required: true,
      type: Array,
    },
  },
};
</script>