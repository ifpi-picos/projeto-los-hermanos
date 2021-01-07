<template>
  <div>
    <b-container fluid class="pr-0 pl-0">
      <Header></Header>
    </b-container>

    <b-container>
      <b-row>
        <b-card
          v-for="item in posts"
          :key="item.id"
          :title="item.data().title"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <p v-html="item.data().content"></p>
          </b-card-text>

          <b-button href="#" variant="primary">saiba mais</b-button>
        </b-card>

      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import firebase from 'firebase';
export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      posts: [],
      unsubscribe: null
    }
  }, 
  methods: {
    onDataChange(items) {
      console.log(items.docs)
      this.posts = items.docs;
    },
  },
  mounted() {
    this.unsubscribe = firebase.firestore().collection('posts').onSnapshot(this.onDataChange);
  },
  beforeDestroy() {
    this.unsubscribe();
  }
}
</script>
