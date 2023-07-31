<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                default: "",
            },
            buttonClass: {
                type: String,
                default: "mt-7 w-full text-left hover:bg-slate-800 py-2 rounded-md",
            }
        }      
    };
</script>

<template>
  <button :class="buttonClass">
    <font-awesome-icon :icon="icon" class="mr-2" v-if="icon" />
    {{ label }}
  </button>
</template>