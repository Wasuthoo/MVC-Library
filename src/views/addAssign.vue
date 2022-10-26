<template>
    <v-card class="pa-10 ma-10">
        <h1>Assigment</h1>
        <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <a>Assignment name</a>
      <v-text-field
        v-model="name"
        :counter="50"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <a>Assignment description</a>
  
      <v-text-field
        v-model="desc"
        label="Description"
        optional
      ></v-text-field>
      <a>Date form : dd/mm/yyyy</a>
      <v-text-field
        v-model="duedate"
        label="Due Date"
        :counter="10"

      ></v-text-field>
      
      <a>24hr Time : hh:mm</a>

      <v-text-field
        v-model="duetime"
        label="Due Time"
        :counter="5"
      ></v-text-field>
      
      <a>StudentID</a>

      <v-text-field
        v-model="student"
        label="StudentID"
        required
      ></v-text-field>
  
   
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submit"
      >
        Submit
      </v-btn>
  
  
  
    </v-form>
    </v-card>
   
  </template>




<script setup>

import { ref } from 'vue';
import { Class_Store } from "../stores/Class_Store";
import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const store = Class_Store()
  const name = ref('');
  const desc = ref('');
  const duedate = ref('');
  const duetime = ref('');
  const student = ref('');

  const submit =() => {
    const data = {
      Title_Name: name.value,
      Description: desc.value,
      Due_Date: duedate.value,
      Due_Time: duetime.value,
      Student: student.value
    }
    store.writeDB(data)
    router.push('/classroom/teacher')
  }

</script>