import { defineStore } from 'pinia'
import axios from "axios";



export const Class_Store = defineStore({
  id: 'class',
  state: () => ({
    db : [],
  }),
  actions: {
    async getDB() {
      try {
        const res = await axios.get(`http://localhost:3001/Assignment`);
        this.db = res.data;
      } catch (e) {
        console.error(e);
      }
    },
    writeDB(payload) {
      console.log(payload);
      
    },

    addAssignment() {
      console.log("addAssignment");
    }

  },
  getters: {
    getDB() {
      return db;
    },

  }
})
