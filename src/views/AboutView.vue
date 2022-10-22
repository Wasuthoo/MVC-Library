<template>
  <div class="about">
    <h1>This is counter</h1>
    <v-btn class="ma-15 pa-15" @click="storeCounter.increaseCount"><h1>{{storeCounter.count}}</h1></v-btn>
  </div>
</template>

<script setup>
  import { useCounterStore } from '../stores/counter';
  const storeCounter = useCounterStore()

</script>

<style>

</style>
