<template>
  <div class="about">
    <h1>About page</h1>
    <p>Count from store : {{ getCount }}</p>
    <p>Double count : {{ getCountDouble }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    getCount() {
      return this.$store.state.count;
    },
    getCountDouble() {
      return this.$store.getters.countDouble;
    }
  }
};
</script>
