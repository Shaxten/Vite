<script setup lang="ts">
</script>

<template>
  <div class="template">
    <nav>
      <div class="logo">
        <img src="./assets/img/logo.png"/>    
        <h3>MelioraCSS</h3>
        <hr/>
      </div>
      <div class="nav-item">
        <router-link to="/">Accueil</router-link>
        <router-link to="/tasks">Tâches</router-link>
        <router-link to="/about">A propos</router-link>
      </div>
    </nav>
    <router-view></router-view> 
  </div>


</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
.template{
  display: flex;
  min-height: 920px;
}

h3{
  font-size: 1.6rem;
}
a{
  color: #000000;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  transition-duration: 0.4s;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

a:hover{
  background-color: rgba(128, 198, 226, 0.644);
}

hr{
  background-color: black;
    height: 1px;
    border: none;
    margin-left: 35px;
    margin-right: 35px;
}

nav{
  width: 300px;
  background-color: #e6e6e680;
}

nav img{
  width: 200px;
}

.nav-item{
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.logo{
  text-align: center;
}

</style>
