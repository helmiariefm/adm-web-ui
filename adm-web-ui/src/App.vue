<script>
  import Sidebar from "./organisms/Sidebar.vue"
  import Navbar from "./organisms/Navbar.vue"
  import MainContent from "./organisms/MainContent.vue"

  export default{
    components:{
      Sidebar,
      Navbar,
      MainContent
    }
  }
</script>

<template>  
  <Sidebar/>

  <div class="flex">
    <div class="w-full h-full md:ml-60">      
      <Navbar/>      
      <MainContent/>
    </div>
  </div>
</template>
