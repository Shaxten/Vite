<template>
    <div class="content">
      <div class="grid">
        <div>
          <h1>Bonjour</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>       
        </div>
        <div>
            <img src="../assets/img/logo.png" />
        </div>

      </div>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Homepage',
  });
  </script>
  
  <style scoped>

  .grid{
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
  }
  </style>
  