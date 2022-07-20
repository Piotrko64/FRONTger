<script setup lang="ts">
import { ref } from "vue";
import { exampleTalking } from "./exampleTalking";

const myName = ref("Luke");
</script>

<template>
    <div class="chat">
        <div class="bubble" v-for="mess in exampleTalking" :class="{ yourMess: myName === mess.name }">
            <img :src="mess.imgProfile" alt="" :class="{ displayPhoto: mess.lastMessageUser }" />
            <div class="message">
                {{ mess.message }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.chat {
    background-color: rgb(46, 46, 61);
    height: 100vh;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .bubble {
        display: flex;
        align-items: flex-end;

        color: white;
        &.yourMess {
            flex-direction: row-reverse;
            .message {
                border-bottom-right-radius: 0;
            }
        }
        img {
            width: 45px;
            border-radius: 50%;
            aspect-ratio: 1;
            object-fit: cover;
            visibility: hidden;
            &.displayPhoto {
                visibility: visible;
            }
        }
        .message {
            background-color: rgb(255, 255, 255, 0.1);
            max-width: 500px;
            text-align: left;
            margin: 5px 5px 0;
            padding: 8px;
            border-radius: 10px;
            border-bottom-left-radius: 0;
        }
    }
}
</style>
