<template lang="pug">
.home
  page-info(
    title="This is an about page"
    info="Lorem ipsum dolor sit amet, consectetum! Ad, cum dicta dolore dolorem exercitationem iusto laborum libero magnam, maiores natus neque nostrum perferendis, quasi quidem rerum sed temporibus veritatis."
    :button-text="`You clicked me ${ clickCount }`"
    :button-callback="doClick"
  )
</template>

<script lang="ts">
import { ref } from "vue"
// Components
import PageInfo from "@/widgets/common/page-info.vue"

export default {
  name: 'AboutPage',
  components: {
    PageInfo
  },
  setup () {
    // Variables
    /**
     * Click counter
     */
    const clickCount = ref(0)

    // Methods
    /**
     * Increment click counter value
     */
    const doClick = () => {
      clickCount.value += 1
    }

    // Return
    return {
      clickCount,
      doClick
    }
  }
}
</script>
