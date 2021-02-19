<template>
  <div>
    <h1>Counter</h1>
    <p @click="increment()">You clicked {{ total }} times.</p>
    <p>Count from store : {{ getCount }}</p>
    <p>Double count : {{ getCountDouble }}</p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      total: 0
    };
  },
  computed: {
    getCount() {
      return this.$store.state.count;
    },
    getCountDouble() {
      return this.$store.getters.countDouble;
    }
  },
  methods: {
    increment() {
      this.total++;
      this.$store.commit("setCount", this.total++);
    }
  }
};
</script>

<style scoped>
</style>