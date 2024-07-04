import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  props: {
    msg: {
      type: String
    }
  },
  setup(props) {
    return () => (
      <>
        <div class='text-3xl text-blue-400 p-4'>{props.msg}</div>
      </>
    )
  }
})
