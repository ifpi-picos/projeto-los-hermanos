<template>
  <b-container fluid>
    <br /><br /><br /><br /><br />
    <b-row align-v="center" align-h="center">
      <b-col class="ml-auto mr-auto" md="12">
        <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-light card-login">
          <h2 class="text-center">LOGIN</h2>
          <b-form @submit.prevent="login">
            <b-form-group label="Email:" label-for="email">
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

            <b-form-group label="Senha:" label-for="senha">
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
            <b-button
              type="submit"
              class="float-right"
              variant="outline-secondary"
              >Entrar</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from 'firebase'
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(() => {
          // localStorage.setItem('username', result.user.displayName)
          // const usuario = {}
          // usuario.photoURL = result.user.photoURL
          // usuario.email = result.user.email
          // usuario.displayName = result.user.displayName
          // const usuarioExistente = await this.usuarioExistente(result.user.uid)
          // console.log('usuarioExistente', usuarioExistente)
          // if (!usuarioExistente) {
          //   console.log('add new user ')
          //   await this.salvarUsuario(usuario, result.user.uid)
          // }
          console.log(firebase.auth().currentUser);
          this.$router.push({ name: 'home'})
          console.log('Ok');
        })
        .catch(error => {
          console.log(error)
          this.$bvToast.toast('Email ou senha incorretos.', {
            title: 'Erro',
            autoHideDelay: 5000,
            noCloseButton: true,
            variant: 'danger'
          })
        })
    },

    // async salvarUsuario (usuario, uid) {
    //   console.log('usuario: ', usuario, uid)
    //   this.$firebase
    //     .firestore()
    //     .collection('usuarios')
    //     .doc(uid)
    //     .set(usuario)
    //     .then(docRef => {
    //       console.log('usuario salvo com sucesso: ', docRef.id)
    //     })
    //     .catch(function (error) {
    //       console.error('Error adding document: ', error)
    //     })
    // },

    // async usuarioExistente (uid) {
    //   const docRef = this.$firebase
    //     .firestore()
    //     .collection('usuarios')
    //     .doc(uid)
    //   const doc = await docRef.get()
    //   return doc.exists
    // },
  }
}
</script>
<style scoped>
.input-group-text {
  background: #fff !important;
  border-right: none !important;
}

.inputs-login {
  border-left: none !important;
}

.card-login {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px !important;
  border: 0.5px #dee2e6 solid !important;
}

</style>
