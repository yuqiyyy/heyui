<template>
  <div>
    <p>对应的值：{{value}}</p>
    <Slider v-model="value" :step="5"></Slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: {
        start: 0,
        end: 20
      }
    }
  }
};
</script>