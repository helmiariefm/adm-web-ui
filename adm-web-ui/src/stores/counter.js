import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {  
  state(){
    return{
        isSidebarVisible: true,
    }
  },
  actions: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
});
