<script setup lang="ts">
import CardFriend from "./CardFriend.vue";
import { exampleFriends } from "./exampleFriends";
</script>

<template>
    <div class="listFriends">
        <CardFriend
            v-for="friend in exampleFriends"
            :humor="friend.humor"
            :nick="friend.nick"
            :describe="friend.describe.slice(0, 120) + '...'"
            :img="friend.imgProfileUrl"
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
