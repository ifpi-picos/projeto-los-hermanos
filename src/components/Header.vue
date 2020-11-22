<template>
 <b-navbar class="header">
     <b-navbar-brand class="brand">Mural Online</b-navbar-brand>
     <b-navbar-nav class="ml-auto">
         <b-nav-item >
             <b-icon-arrow-clockwise class="icon"></b-icon-arrow-clockwise>
             Atualizar
         </b-nav-item>
         <b-nav-item > 
             <b-icon-plus class="icon"></b-icon-plus>
             Criar
         </b-nav-item>
         <b-nav-item >
             <b-icon-share class="icon"></b-icon-share>
             Compartilhar
         </b-nav-item>
         <b-dropdown-item>
             <b-icon-three-dots-vertical></b-icon-three-dots-vertical>
         </b-dropdown-item>
     </b-navbar-nav>
 </b-navbar>
</template>

<script>
export default {
    
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
body {
    width: 100%;
}
.header {
    background-color: #004910;
    
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

/* .icon {
    height: 30px;
    width: 30px;
} */
</style>