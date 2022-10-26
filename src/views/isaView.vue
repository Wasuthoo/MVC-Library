<template>
    <div class="about">
      <h1 class="pa-10">MISC-HBD</h1>
      <h1 class="pa-10">Input command as Binary</h1>
      <a class="ml-10 text-red">{{storeRegister.getBinary}}</a>
      <v-form class="ml-10">

        <v-text-field
          v-model="input"
          label="Binary"
          outlined
          dense
          clearable
          ></v-text-field>
        <v-btn @click="inputstore" class="mt-5">Submit</v-btn>
        
      </v-form>
  
      
      <v-container>
        <v-container>
          <v-row>
            <v-col>
              <v-card class="pa-2"> Number of Register </v-card>
            </v-col>
            <v-col>
              <v-card class="pa-2"> Value </v-card>
            </v-col>
          </v-row>
        </v-container>
        <span v-for="n in 16" :key="storeRegister.register[n]">
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2 mt-n6"> {{ n-1 }} </v-card>
              </v-col>
              <v-col>
                <v-card class="pa-2 mt-n6">
                  {{ storeRegister.register[n - 1] }}
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </span>
      </v-container>
    </div>
  </template>
    
<script setup>

    import { useISA_register } from "../stores/ISA_register";
    import { ref } from 'vue'
  
    const storeRegister = useISA_register();
    const input = ref('')
    
    const inputstore = () =>{
      storeRegister.binary = input.value;
      storeRegister.getaBinary();
      console.log(input);
      input = ""
    } ;

</script>
  

  