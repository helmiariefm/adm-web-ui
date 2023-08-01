<script>
  import Sidebar from "./organisms/Sidebar.vue"
  import Navbar from "./organisms/Navbar.vue"
  import MainContent from "./organisms/MainContent.vue"
  import { useCounterStore } from "./stores/counter"
  import { mapWritableState } from "pinia"

  export default{
    components:{
      Sidebar,
      Navbar,
      MainContent
    },
    computed: {
      ...mapWritableState(useCounterStore, ['isSidebarVisible'])
    }    
  }
</script>

<template>
  <Sidebar/>

  <div class="flex">
    <div :class="`w-full h-full ${isSidebarVisible ? 'md:ml-60' : 'md:ml-0'}`">
      <Navbar/>      
      <MainContent/>
    </div>
  </div>
</template>