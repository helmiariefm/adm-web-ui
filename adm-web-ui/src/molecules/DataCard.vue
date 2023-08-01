<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    trend: {
      type: String
    },
    trendtext: {
      type: String
    },
    trendColor: {
      type: String
    }
  },
  computed: {
    trendColorClass() {
      return `text-${this.trendColor}-500`;
    },
    chartImage() {
      return this.trendColor === 'red' ? './rd-chart.png' : './gr-chart.png';
    }
  }
};
</script>

<template>
  <div class='flex justify-between bg-white border w-full mr-3 my-3 md:my-0 p-5 rounded-md'>
    <div>
      <h4>{{ title }}</h4>
      <h4 class='text-2xl md:text-3xl font-bold text-zinc-600 my-3'>{{ value }}</h4>
      <div class='flex gap-2'>
        <h4 :class='trendColorClass'>{{ trend }} 23%</h4>
        <h4 class='text-zinc-700'>{{ trendtext }}</h4>
      </div>
    </div>
    <img :src='chartImage' class='w-20 h-16 md:w-16 md:h-12 self-center' />
  </div>
</template>
