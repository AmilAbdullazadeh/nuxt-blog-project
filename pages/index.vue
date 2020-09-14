<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList
  },
  created() {
    this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    }
  }
  // fetch(context) {
  //   console.log(context);
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch("setPosts", [
  //       {
  //         id: 1,
  //         title: "Test title",
  //         subTitle: "Test title",
  //         text: "Test test",
  //         author: "Amil"
  //       }
  //     ]);
  //     resolve();
  //   }).catch(err => {
  //     context.error(err);
  //   });
  // }

  // asyncData(context) {
  //   console.log(context);
  //   // return new Promise().catch(err => {
  //   //   context.error(new Error())
  //   // })
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       fetchedPosts: [
  //         {
  //           id: 1,
  //           title: "Test title",
  //           subTitle: "Test title",
  //           text: "Test test",
  //           author: "Amil"
  //         }
  //       ]
  //     });
  //     // reject(new Error());
  //   })
  //     .then(data => {
  //       return data;
  //     })
  //     .catch(err => {
  //       context.error(err);
  //     });
  // }
};
</script>

<style scoped></style>
