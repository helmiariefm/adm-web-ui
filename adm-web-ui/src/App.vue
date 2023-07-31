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
  <!-- SIDEBAR -->
  <Sidebar/>

  <div class="flex">
    <div class="w-full h-full ml-60">
      <!-- NAVBAR -->
      <Navbar/>
  
      <!-- MAIN -->
      <MainContent/>
    </div>
  </div>
</template>
