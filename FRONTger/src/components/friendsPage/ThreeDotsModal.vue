<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";

const { open } = defineProps<{ open: boolean }>();
const emits = defineEmits(["closeModal"]);

const modal = ref();
onMounted(() => {
    modal.value!.focus();
});
</script>

<template>
    <div class="modal" ref="modal" tabindex="0" @blur="emits('closeModal')">aaaaaaa</div>
</template>
<style lang="scss">
@import "../../assets/styles/flex.scss";
@import "../../assets/styles/font.scss";
.modal {
    background-color: rgb(63, 63, 73);
    color: white;
    position: absolute;
    right: 15px;
    top: 15px;
    outline: none;
    border-radius: 5px;
    padding: 3px;
}
</style>
