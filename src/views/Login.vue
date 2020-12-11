<template>
  <b-container fluid >
    <br><br><br><br><br>
    <b-row align-v="center" align-h="center">
      <b-col class=" ml-auto mr-auto"
        md="12">
        <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-light card-login">
          <h2 class="text-center">LOGIN</h2>
          <b-form @submit.prevent="login">
            <b-form-group
              label="Email:"
              label-for="email"
            >
              <b-input-group>
                <b-input-group-prepend>
                  <span class="input-group-text icone-input"
                    ><i class="fas fa-envelope fa-lg"></i>
                  </span>
                </b-input-group-prepend>

                <b-form-input
                  class="inputs-login"
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
              <b-input-group>
                <b-input-group-prepend>
                  <span class="input-group-text icone-input"
                    ><i class="fas fa-lock fa-lg"></i>
                  </span>
                </b-input-group-prepend>
                <b-form-input
                  class="inputs-login"
                  id="senha"
                  type="password"
                  required
                  v-model="senha"
                  placeholder="Informe sua senha"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-button type="submit" class="float-right" variant="outline-secondary">Entrar</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
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

.input-group-text {
  background: #fff !important;
  border-right: none !important;
}

/* .icone-input {
  color: #007bff;
  color: #00FA9A;
} */
.inputs-login {
  border-left: none !important;
}

.card-login {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px !important;
  border: 0.5px #dee2e6 solid !important;
}

/* .view-heigh {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
