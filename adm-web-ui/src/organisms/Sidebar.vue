<script>
    import Button from "../atoms/Button.vue";

    export default{
        components: {
            Button
        }
    }
</script>

<template>
    <div class="w-60 h-full fixed bg-slate-900 text-white">
        <div id='judul' class='flex mx-2 pt-5'>
            <div class='font-bold text-white bg-gradient-to-r from-[#32ae1e] to-[#1e8d91] px-2 h-6 my-auto rounded-full mr-2'>
                <span class='text-base'>A</span>
            </div>
            <h2 class='text-lg font-semibold'>Alfaeeza Admin</h2>
        </div>
      
        <h1 class='mx-2 mt-9'>Menu</h1>

        <div class='mx-3 flex flex-col items-start'>
            <Button label="Hide Sidebar" icon="chevron-left"/>
            <Button label="Home" icon="home"/>
            <Button label="Vendor/Supplier" icon="users"/>
            <Button label="Customer/Dealer" icon="store-alt"/>
            <Button label="Configuration/Setting" icon="cog"/>
        </div>
    </div>
</template>