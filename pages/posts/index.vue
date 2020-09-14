<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "Test title",
            subTitle: "Test title",
            text: "Test test",
            author: "Amil",
          },
        ],
      });
    }, 1000);
  },
};
</script>

<style scoped>
</style>
