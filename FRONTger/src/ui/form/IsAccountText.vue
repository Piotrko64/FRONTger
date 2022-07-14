<script setup lang="ts">
const { questionText, textToToggle, route } = defineProps<{
    questionText: string;
    textToToggle: string;
    route: string;
}>();
</script>
<template>
    <div class="isHaveAccount">
        {{ questionText }}

        <router-link :to="route">{{ textToToggle }}</router-link>
    </div>
</template>
<style scoped lang="scss">
.isHaveAccount {
    padding-top: 15px;
    font-size: 0.95rem;
    a {
        color: #e6d11c;
        cursor: pointer;
        text-decoration: none;
    }
}
</style>
