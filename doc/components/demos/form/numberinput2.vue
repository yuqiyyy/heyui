<template>
  <div>
    <p>{{value}}</p>
    <NumberInput v-model="value" :max="10" :min="0"></NumberInput>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
};
</script>
