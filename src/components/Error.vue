<template>
<v-alert class="error" :value="this.errorMsg != ''">
    {{ errorMsg }}
</v-alert>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('error', ['errorMsg'])
  }
};
</script>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>