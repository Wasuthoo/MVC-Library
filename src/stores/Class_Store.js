import { defineStore } from 'pinia'
import { load } from 'webfontloader'
import db from "../DB/Assignment.json";




export const Class_Store = defineStore({
  id: 'class',
  state: () => ({
    name:"wasu"

  }),
  actions: {
    ReadDB() {
      console.log(db);
    },
    writeDB() {
      console.log("writeDB");
    }
  },
  getters: {
    getDB() {
      return db;
    },

  }
})
