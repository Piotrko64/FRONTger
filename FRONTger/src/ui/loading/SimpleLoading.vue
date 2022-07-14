<template>
    <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    </div>
    <p>Wait...</p>
</template>
<style lang="scss" scoped>
.sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 15px auto;
    .sk-cube {
        width: 33%;
        height: 33%;
        background-color: rgb(255, 255, 255);
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    .sk-cube1 {
        animation-delay: 0.2s;
    }
    .sk-cube2 {
        animation-delay: 0.3s;
    }
    .sk-cube3 {
        animation-delay: 0.4s;
    }
    .sk-cube4 {
        animation-delay: 0.1s;
    }
    .sk-cube5 {
        animation-delay: 0.2s;
    }
    .sk-cube6 {
        animation-delay: 0.3s;
    }
    .sk-cube7 {
        animation-delay: 0s;
    }
    .sk-cube8 {
        animation-delay: 0.1s;
    }
    .sk-cube9 {
        animation-delay: 0.2s;
    }
}

@keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
    }
    35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
    }
}

@keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
    }
    35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
    }
}
</style>
