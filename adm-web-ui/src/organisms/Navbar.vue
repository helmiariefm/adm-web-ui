<script>
    import { useCounterStore } from '../stores/counter';
    import { mapWritableState, mapActions } from 'pinia'
    import Button from '../atoms/Button.vue';

    export default{
        components:{
            Button
        },
        computed: {
            ...mapWritableState(useCounterStore, ['isSidebarVisible'])
        },
        methods: {
            ...mapActions(useCounterStore, ['toggleSidebar'])
        }
    }
</script>

<template>
    <div class='flex justify-between drop-shadow-lg bg-white py-3 pl-11 pr-11'>
        <div class='flex'>
            <Button @click="toggleSidebar" label="" icon="chevron-right" v-if="!isSidebarVisible" class="self-center mr-7 text-gray-700 text-xl"/>            
            <div class="relative hidden md:block">
                <input type="search" class="border-2 bg-gray-200 rounded-md pl-9 pr-2 py-1 w-80" placeholder='Search' />
                <font-awesome-icon icon="search" class="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
            </div>
        </div>
        <div class='flex justify-around gap-5'>
            <div class='flex gap-2'>
                <h4 class='self-center'>hello, Admin!</h4>
                <font-awesome-icon icon="user" class="text-gray-500 bg-gray-200 p-2 rounded-full self-center"/>                
            </div>
            <font-awesome-icon icon="bell" class='w-5 h-5 p-1 hidden md:block text-gray-500 bg-gray-200 rounded-full self-center' />
            <font-awesome-icon icon="save" class='w-5 h-5 p-1 hidden md:block text-gray-500 bg-gray-200 rounded-full self-center' />
        </div>
    </div>
</template>