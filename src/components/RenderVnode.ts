import { defineComponent } from 'vue';

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true,
    },
  },
  render() {
    return this.vNode;
  },
});
export default RenderVnode;
