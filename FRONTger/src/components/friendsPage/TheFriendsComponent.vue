<script setup lang="ts">
import { ref } from "vue";
import CardFriend from "./CardFriend.vue";
import { exampleFriends } from "./exampleFriends";

const a = ref("am2");
</script>

<template>
    <div class="listFriends">
        <CardFriend
            v-for="friend in exampleFriends"
            :humor="friend.humor"
            :nick="friend.nick"
            :img="friend.imgProfileUrl"
            :searchText="a"
            :id="friend.id"
            :describe="friend.describe"
        />
    </div>
</template>
<style lang="scss">
.listFriends {
    padding-top: 85px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
