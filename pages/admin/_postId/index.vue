<template>
  <PostForm :isUpdate="true" />
</template>

<script>
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
};
</script>