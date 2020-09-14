<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: [
          {
            id: 1,
            title: "Test title, ID is : " + context.params.postId,
            subTitle: "Test title",
            text: "Test test",
            author: "Amil",
          },
        ],
      });
    }, 2000);
  },
};
</script>