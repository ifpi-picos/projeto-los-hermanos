<template>
  <b-container fluid>
    <br /><br /><br /><br /><br />
    <b-row align-v="center" align-h="center">
      <b-col class="ml-auto mr-auto" md="12">
        <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-light card-login">
          <h2 class="text-center">Crie sua conta</h2>
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
              >Criar</b-button
            >
          </b-form>
        
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}

//methods: {}
  /*submit()
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 */
</script>

<style>

</style>