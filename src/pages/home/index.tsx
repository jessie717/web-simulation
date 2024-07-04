import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <>
        <div class='text-2xl text-red-400 p-4'>hello vue tsx</div>
      </>
    )
  }
})
