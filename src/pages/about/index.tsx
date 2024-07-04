import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
  setup() {
    return () => (
      <>
        <div class='text-2xl text-orange-400 p-4'>about page</div>
      </>
    )
  }
})
