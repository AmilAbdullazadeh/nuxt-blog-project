<template>
  <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
    <blockquote class="blockquote">
      <h3>{{ post.title }}</h3>
      <p>{{ post.subtitle }}</p>
      <p class="mb-0">{{ post.text }}</p>
      <footer class="blockquote-footer">
        Web Dev :
        <cite title="Source Title">{{ post.author }}</cite>
      </footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Array,
      required: true,
    },
  },
};
</script>