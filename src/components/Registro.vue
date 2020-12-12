<template>
 <div class="base">
  <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-success">
    <h2 class="text-center">LOGIN</h2>
    <b-form @submit.prevent="login">
      <b-form-group
        label="Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="Informe seu email"
        ></b-form-input>
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
export default {

}
</script>

<style>

</style>