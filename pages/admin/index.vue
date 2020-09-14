<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button @click.prevent="$router.push('/admin/new-post')" class="btn btn-dark">Add new Post</button>
    </div>
    <PostList :isAdmin="true" />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
export default {
  layout: "admin",
  components: {
    PostList,
  },
};
</script>