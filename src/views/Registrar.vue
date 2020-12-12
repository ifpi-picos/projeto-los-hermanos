<template>
<div>
  <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-success">
    <h2 class="text-center">Cria uma nova conta</h2>
    <b-form @submit.prevent="login">
      <b-form-group
        label="Seu Email:"
        label-for="email"
      >
      <b-input-group>   
      <b-input-group-prepend>
            <span class="input-group-text"
            ><i class="far fa-user"></i>
            ></span>
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
        label="Crie sua senha:"
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