<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="preloader">
        <div class="loader">
            <div class="wait">Veuillez patienter svp</div>
            <div class="plane">
                <img
                    src="../src/moban7664/static/picture/4820.gif"
                    class="plane-img"
                    alt=""
                />
            </div>
            <div class="earth-wrapper">
                <div class="earth"></div>
            </div>
        </div>
    </div>
    <RouterView />
</template>
