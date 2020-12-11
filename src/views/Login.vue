<template>
  <div>
    <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-success">
    <h2 class="text-center">LOGIN</h2>
    <b-form @submit.prevent="login">
      <b-form-group
        label="Email:"
        label-for="email"
      >
      <b-input-group>  
        <b-input-group-prepend>
          <span class="icone-email"
            ><i class="far fa-envelope"></i>
          </span>
      </b-input-group-prepend>
       
        <b-form-input
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="Informe seu email"
        ></b-form-input>
      </b-input-group>
      </b-form-group>

      <b-form-group
        label="Senha:"
        label-for="senha"
      >
        <b-form-input
          id="senha"
          type="password"
          required
          v-model="senha"
          placeholder="Informe sua senha"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="float-right" variant="primary">Entrar</b-button>
    </b-form>
  </b-card>
  </div>
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
        this.$router.push({ name: "home" })
        //await this.salvarUsuario(usuario, result.user.uid)
      })
      .catch(function (error) {
        console.error(error)
      })
    }
  }
}

</script>
<style scoped>
.icone-email {
  color: red;  
}
</style>