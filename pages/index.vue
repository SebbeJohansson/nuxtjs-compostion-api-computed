<template>
  <div>
    <fetching-component :value="stateSetOnMount" />
    <new-component />
  </div>
</template>

<script>
import NewComponent from '../components/NewComponent.vue';
export default {
  name: 'IndexPage',
  components: {
    NewComponent,
  },
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
