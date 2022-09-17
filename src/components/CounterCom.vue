<template>
    <v-container class="count">
     {{ storeCounter.count }}
   </v-container>
</template>

<script setup>
   import { useCounterStore } from '../stores/counter';
   const storeCounter = useCounterStore()
   
</script>