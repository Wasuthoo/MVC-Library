<template>
  <v-app>
    
    <nav>
    <RouterLink to="/">Home |</RouterLink>
    <RouterLink to="/about"> About</RouterLink>
    </nav>
    <router-view/>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
