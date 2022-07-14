<script setup lang="ts">
const emits = defineEmits(["changeHumor"]);
const { icon, name } = defineProps<{ icon: any; name: string }>();
</script>
<template>
    <div class="oneHumor" @click="emits('changeHumor', name)">
        {{ icon }}
    </div>
</template>
<style lang="scss" scoped></style>
