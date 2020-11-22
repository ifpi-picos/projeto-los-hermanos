<template>
  <b-container class="fixed-top d-flex align-items-center justify-content-center container">
    <b-card class="card">
      <b-card-header class="card-header">
        Mural Online
      </b-card-header>
      <b-card-body>
        <b-button pill class="google-button">
          <img  src="../assets/google-icon.svg">
          Entre com o Google
        </b-button>
      </b-card-body>
    </b-card>
  </b-container>
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
body {
  background-color: #004910;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.container {
  height: 100%;
  
}
.card {
  padding: 0% 10%;
}

.google-button {
  display: inline;
  background-color: #EEEEEE;
  color: #132938;
  margin: 2% 0%;
}

.google-button img{
  height: 0.5cm;
  width: auto;

}

.card-header {
  text-align: center;
  background: #fff;
}
</style>