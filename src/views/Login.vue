<template>
  <b-card class="col-md-4 ml-auto mr-auto mt-4 text-left bg-info">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="usuario.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Senha:"
        label-for="senha"
      >
        <b-form-input
          id="senha"
          v-model="usuario.senha"
          type="password"
          required
          placeholder="Informa a senha"
        ></b-form-input>
      </b-form-group>
        <b-button class="float-right" variant="light" type="submit">Entrar</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: '',
        senha: ''
      }
    }
  },
}
</script>
<style scoped>
</style>