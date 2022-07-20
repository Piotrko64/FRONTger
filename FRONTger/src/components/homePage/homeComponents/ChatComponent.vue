<script setup lang="ts">
import { ref } from "vue";
import { exampleTalking } from "./exampleTalking";

const myName = ref("Luke");
</script>

<template>
    <div class="chat">
        <div class="bubble" v-for="mess in exampleTalking">
            <img :src="mess.imgProfile" alt="" />
            <div class="message" :class="{ yourMess: myName === mess.name }">
                {{ mess.message }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.chat {
    margin-top: 65px;
    background-color: rgb(46, 46, 61);
    height: 100%;
    .bubble {
        display: flex;
        align-items: flex-end;
        img {
            width: 45px;
            border-radius: 50%;
            aspect-ratio: 1;
            object-fit: cover;
        }
        .message {
            color: white;
            &.yourMess {
                color: red;
            }
        }
    }
}
</style>
