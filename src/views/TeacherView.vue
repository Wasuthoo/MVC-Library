<template>

    <v-card class="d-flex  ma-10 justify-center">
      <h1 class="py-10">Teacher Assignment</h1>
        <v-btn class="mx-10 my-12 ma-8" @click="push" fab dark color="purple" to="/classroom/teacher/add">
         <v-icon dark> mdi-plus </v-icon>
       </v-btn>
  
      
    </v-card>
    <v-card  v-for="n in length" :key="n" class="pa-5 ma-6 bg-purple-lighten-5" >
        <h1>{{n-1}}</h1>
        <a>
          Name : {{db[n-1].Title_Name}} <br>
          Description : {{db[n-1].Description}} <br> 
          Due Time and Date : {{db[n-1].Due_Date}} {{db[n-1].Due_Time}} <br>
          Student ID : {{db[n-1].Student}} <br>
        </a>
      </v-card>
  
</template>

<script setup>

  import { Class_Store} from "../stores/Class_Store";

  const store = Class_Store()
  const db = store.getDB.Assignment
  const length = db.length
  

  const push = () => {
    store.ReadDB();


  }
</script>