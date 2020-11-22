<template>
  <b-container>
    <Header></Header>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
      Header
  }
}
</script>
