import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div class='text-3xl text-blue-400'>tsx app</div>
        <RouterView />
      </>
    )
  }
})
