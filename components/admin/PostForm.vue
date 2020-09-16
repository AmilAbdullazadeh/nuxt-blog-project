<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form @submit.prevent="onSubmit" style="width: 500px;">
      <fieldset>
        <legend v-if="isUpdate">Post edit</legend>
        <legend v-else>Add new Post</legend>
        <div class="form-group">
          <label>Author</label>
          <input v-model="post.author" type="text" class="form-control" placeholder="Author" />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input v-model="post.title" type="text" class="form-control" placeholder="Title" />
        </div>
        <div class="form-group">
          <label>Subtitle</label>
          <input v-model="post.subTitle" type="text" class="form-control" placeholder="Subtitle" />
        </div>
        <div class="form-group">
          <label for="exampleTextarea">Text</label>
          <textarea v-model="post.text" class="form-control" rows="5"></textarea>
        </div>
        <div class="form-group">
          <button @click="$router.push('/admin')" class="btn btn-danger">Cancel</button>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: null,
        subTitle: null,
        author: null,
        text: null,
      },
    };
  },
  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false,
    },
    post: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
  },
  created() {
    this.post = this.post ? this.post : {
      id: null,
      title: null,
      subTitle: null,
      text: null,
      author: null
    }
  }
};
</script>