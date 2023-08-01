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
            type: {
                type: String,
                default: "default"
            }
        },
        computed:{
            buttonClass() {
                let classes = "";
                switch (this.type) {
                    case "sidebar":
                        classes = "mt-7 w-full text-left hover:bg-slate-800 py-2 rounded-md";
                        break;
                    case "filter":
                        classes = "border-2 rounded-md p-1 hover:bg-zinc-100";
                        break;
                    default:
                        break;
                }
                return classes;
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