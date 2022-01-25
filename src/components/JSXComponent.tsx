import { defineComponent } from 'vue'
import { ref, defineProps } from 'vue'
// named exports referencing variable declaration: ok
const Bar = defineComponent({
  props: { msg: String } as const,
  setup(props, { slots }) {
    return () => <div>{props.msg}</div>
  },
})
export default Bar
