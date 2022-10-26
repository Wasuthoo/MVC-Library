import { defineStore } from 'pinia'
import { load } from 'webfontloader'
import db from "../DB/Assignment.json";



export const Class_Store = defineStore({
  id: 'class',
  state: () => ({
    DBfile : db,

  }),
  actions: {
    ReadDB() {
      console.log(this.DBfile);
    },
    writeDB() {
      console.log("writeDB");
    },
    addAssignment() {
      console.log("addAssignment");
    }
  },
  getters: {
    getDB() {
      return db;
    },d

  }
})
