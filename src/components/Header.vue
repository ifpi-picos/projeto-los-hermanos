<template>
 <b-navbar class="header">
     <b-navbar-brand class="brand">Mural Online</b-navbar-brand>
     <b-navbar-nav class="ml-auto">
         <b-nav-item >
             <b-icon-arrow-clockwise class="icon"></b-icon-arrow-clockwise>
             Atualizar
         </b-nav-item>
         <b-nav-item to="Postagem">
             <b-icon-plus class="icon"></b-icon-plus>
             Criar
         </b-nav-item>
         <b-nav-item >
             <b-icon-share class="icon"></b-icon-share>
             Compartilhar
         </b-nav-item>
         <b-avatar ></b-avatar>
         <b-nav-item-dropdown right >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
         </b-nav-item-dropdown>
     </b-navbar-nav>
 </b-navbar>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  methods: {
      logout () {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem('username')
          console.log('Logout com sucesso!')
          this.$router.push('login')
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
    width: 100%;
}
.header {
    background-color: #004910;
    min-width: 100%;

}

.brand {
    color: #eeeeee;
}

.navbar-light .navbar-nav .nav-link{
    color: #eeeeee;
}

.btn .b-icon.bi, .nav-link .b-icon.bi, .dropdown-toggle .b-icon.bi, .dropdown-item .b-icon.bi, .input-group-text .b-icon.bi{
    color: #eeeeee;
}

</style>
