<script setup lang="ts">
import { onMounted, ref } from "vue";

const emits = defineEmits(["closeModal"]);

const modal = ref();
onMounted(() => {
    modal.value!.focus();
});
</script>

<template>
    <div class="modal" ref="modal" tabindex="0" @blur="emits('closeModal')">
        <div class="option add-delete">Add/Delete</div>
        <div class="option look">Look</div>
    </div>
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
    padding: 8px;
    font-size: 1.2rem;
}
</style>
