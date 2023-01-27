<template>
  <fetching-component :value="stateSetOnMount" />
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      stateSetOnMount: undefined,
    }
  },
  mounted() {
    this.stateSetOnMount = 'arstarst';
  },
}
</script>
