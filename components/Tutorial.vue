

<script>
import {
  defineComponent,
  ref,
  useFetch,
  useContext,
  computed,
} from '@nuxtjs/composition-api';

import {useBundles} from '~/composables/useBundles';
export default defineComponent({
  setup() {

    const buttonValue = ref(1);

    const firstvalue = computed(() => buttonValue.value);
    const bundles = useBundles(firstvalue);
    return {
      buttonValue,
      bundles,
    };
  }
});
</script>

<template>
  <div>
    {{ buttonValue }}
    <button @click="buttonValue++">Click</button>
    {{bundles}}
  </div>
</template>
