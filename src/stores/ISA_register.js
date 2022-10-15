import { defineStore } from 'pinia'
import { load } from 'webfontloader'

export const useISA_register = defineStore({
  id: 'register',
  state: () => ({
    register: Array(16).fill(0),
    memory: Array(256).fill(0),
    binary: '',
    
  }),
  actions: {
    getaBinary(){
      const code = this.binary.slice(0,2)
      const isa = useISA_register()
      if(code === '00'){
        isa.load(this.binary)
      }else if(code === '01'){
        isa.store(this.binary)
      }else if(code === '10'){
        isa.addRegister(this.binary)
      }else if(code === '11'){
        isa.addIntermediate(this.binary)
      }
    },
    load(bi){
      const x = bi.slice(2,6)
      const y = bi.slice(6,14)
      this.register[parseInt(x,2)] = this.memory[parseInt(y,2)]
      console.log("x" + parseInt(x, 2));
      console.log("y" + parseInt(y, 2));
    },
    store(bi){
      const x = bi.slice(2,6)
      const y = bi.slice(6,14)
      this.memory[parseInt(y,2)] = this.register[parseInt(x,2)]
      console.log("x" + parseInt(x, 2));
      console.log("y" + parseInt(y, 2));
    },
    addRegister(bi){
      const x = bi.slice(2,6)
      const y = bi.slice(6,10)
      this.register[parseInt(x,2)] += this.register[parseInt(y,2)]
      console.log("x" + parseInt(x, 2));
      console.log("y" + parseInt(y, 2));
    },
    addIntermediate(bi){
      const x = bi.slice(2,6)
      const y = bi.slice(6,16)
      this.register[parseInt(x,2)] += parseInt(y,2)
      console.log("x" + parseInt(x, 2));
      console.log("y" + parseInt(y, 2));
    }
  },
  getters: {
    getBinary(){
      const code = this.binary.slice(0,2)
      if (this.binary.length === 0) return 'Plesae enter a binary code'
      else if (this.binary.length !== 16) return 'Please enter a 16 bit binary code'
      else if (code == '00'){
        load(this.binary )
        return 'load'
      }
      else if (code == '01'){
        return 'store'
      }
      else if (code == '10'){
        return 'add'
      }
      else if (code == '11'){
        return 'addImmediate'
      }
      else  {
        return 'Please enter a valid binary'
      }
    },
  }
})
