import { computed } from 'vue';
import { pick } from 'lodash-es';

const useComponentCommon = <T extends { [k in string]: any }>(props: T, styleKeys: string[]) => {
  const styleProps = computed(() => pick(props, styleKeys));

  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url;
    }
  };

  return { styleProps, handleClick };
};
export default useComponentCommon;
