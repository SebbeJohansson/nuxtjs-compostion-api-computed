

<script>
import {
  defineComponent,
  ref,
  computed,
} from '@nuxtjs/composition-api';
import { useFetchingComposable } from '~/composables/useFetchingComposable';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: () => undefined,
    }
  },
  setup(props) {
    const buttonValue = ref(1);
    const firstvalue = computed(() => buttonValue.value);
    const computedFromProp = computed(() => props.value);

    const bundles = useFetchingComposable(computedFromProp);

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
    <pre>
    {{bundles}}
    </pre>
  </div>
</template>
