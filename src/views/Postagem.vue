<template>
  <div>
    <div id="editor">
      <h3 class="text-center">Fazer uma Nova Postagem</h3>
      <form>
        <label for="titulo">Titulo</label>
        <input
          class="form-control"
          type="text"
          id="titulo"
          required
          v-model="post.titulo"
        />
        <br />
        <label for="texto">Texto</label>
        <input
          class="form-control"
          type="text"
          required
          id="titulo"
          v-model="post.texto"
        />
        <br />
        <button class="btn btn-primary" @click.prevent="salvar()" type="buton">
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      post: {
        titulo: '',
        texto: '',
        data: new Date(),
        autor: ''
      }
    }
  },

  methods: {
    salvar () {
      this.$firebase
        .firestore()
        .collection('posts')
        .add(this.post)
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    ClassicEditor.create()
    ClassicEditor
      .create( document.querySelector( '#editor' ) )
      .catch( error => {
          console.error( error );
      } );
  }
}
</script>

<style>


</style>
