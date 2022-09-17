<template>
  <div class="home">
    <CounterCom/>
   
  </div>
  <div class="buttons">
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
  </div>
  <hr>
  <div>
    This counter is : {{ storeCounter.OddOrEven }}
  </div>
  <hr>
  <div>
    <h3>edit counter: </h3>
    <input v-model="storeCounter.count"
    type="number"/>
  </div>
  </template>

<script setup>
  import { useCounterStore } from '../stores/counter';
  import CounterCom from '../components/CounterCom.vue'


  const storeCounter = useCounterStore()


</script>

<style>
.count{
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 20px;
  margin: 20px;
}
</style>