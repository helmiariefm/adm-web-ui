<script>
  import Sidebar from "./organisms/Sidebar.vue"
  import Navbar from "./organisms/Navbar.vue"

  export default{
    components:{
      Sidebar,
      Navbar
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
      <main class="bg-gray-700 w-full h-[91.3vh]">
      </main>
    </div>
  </div>
</template>
