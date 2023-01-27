
import {
  defineComponent,
  ref,
  useFetch,
  useContext,
  watch,
} from '@nuxtjs/composition-api';

export const useBundles = (firstvalue) => {
  const context = useContext();
  const firstRef = ref(null);
  const secondRef = ref(null);

  const {fetch} = useFetch(async () => {
    firstRef.value = null;
    secondRef.value = null;

    console.log("usebundles");
    const fetchresult = await context.app.$axios.get('https://rickandmortyapi.com/api/character');
    console.log(fetchresult);

    firstRef.value = fetchresult.data.results;
    secondRef.value = "test445456";
  });

  watch(firstvalue, () => {
    console.log("watch");
    fetch();
  });

  return {
    firstRef,
    secondRef,
  };
};
