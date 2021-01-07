<template>
  <div>
    <b-container fluid class="pr-0 pl-0">
      <Header></Header>
      
    </b-container>
    <b-container>
      <form class="post">
      <b-row>
        <b-col md="12">
          <b-form-group 
          label="Título da postagem"
          label-for="postTitle">
          <b-form-input id="postTitle" v-model="postTitle"> {{postTitle}} </b-form-input>

        </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-form-group class="editor">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md=4>
          <b-button @click="savePost" variant="info">Salvar</b-button>
        </b-col>
      </b-row>
      
    </form>
    </b-container>
    

    
    <!-- <div id="editor">
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
    </div> -->
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  data () {
    return {
      editor: ClassicEditor,
        editorData: '',
        postTitle: '',
        editorConfig: {}
    }
  },

  methods: {
    savePost () {
      const postData = {
        title: this.postTitle,
        content: this.editorData,
        createdAt: new Date(),
        createdBy: this.$firebase.auth().currentUser.displayName,
        createdByUid: this.$firebase.auth().currentUser.uid
      }

      this.$firebase.firestore().collection('posts').add(postData).then(() => {
        this.$router.push('/');
      })
      // this.$firebase
      //   .firestore()
      //   .collection('posts')
      //   .add(this.post)
      //   .then(function (docRef) {
      //     console.log('Document written with ID: ', docRef.id)
      //   })
      //   .catch(function (error) {
      //     console.error('Error adding document: ', error)
      //   })
    }
  }
}
</script>

<style>
.post {
  margin: 0 2%;
}

</style>
