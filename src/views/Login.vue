<template>
  <b-container
    class="fixed-top d-flex align-items-center justify-content-center container"
  >
    <b-card class="card">
      <b-card-header class="card-header"> Mural Online </b-card-header>
      <b-card-body>
        <b-button @click="login()" pill class="google-button">
          <img src="../assets/google-icon.svg" />
          Entre com o Google
        </b-button>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import googleProvider from '../firebase/providers'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
methods: {
  login () {
    this.$firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async result => {
        const usuario = {}
        usuario.photoURL = result.user.photoURL
        usuario.email = result.user.email
        usuario.displayName = result.user.displayName
        await this.salvarUsuario(usuario, result.user.uid)
      })
      .catch(function (error) {
        console.error(error)
      })
    }
  }
}

</script>
<style scoped>
body {
  background-color: #004910;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}

.container {
  height: 100%;
}
.card {
  padding: 0% 10%;
}

.google-button {
  display: inline;
  background-color: #eeeeee;
  color: #132938;
  margin: 2% 0%;
}

.google-button img {
  height: 0.5cm;
  width: auto;
}

.card-header {
  text-align: center;
  background: #fff;
}
</style>