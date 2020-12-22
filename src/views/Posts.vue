<template>
  <div>
    <h3 class="title">Postagens Feitas</h3>
    <b-table :items="posts"></b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    // this.consultar()
    this.carregarDadosEmTempoReal()
  },
  methods: {
    consultar () {
      this.$firebase
        .firestore()
        .collection('posts')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.posts.push(doc.data())
            // console.log(doc.id, ' => ', doc.data())
            // const post = doc.data()
            // post.id = doc.id
          })
        })
    },
    carregarDadosEmTempoReal () {
      this.$firebase
        .firestore().collection('posts')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              console.log('New post: ', change.doc.data())
              this.posts.push(change.doc.data())
            }
            if (change.type === 'modified') {
              console.log('Modified city: ', change.doc.data())
            }
            if (change.type === 'removed') {
              console.log('Removed city: ', change.doc.data())
            }
          })
        })
    }
  }
}
</script>
.title {
  text-center;
}
<style lang="scss" scoped></style>
