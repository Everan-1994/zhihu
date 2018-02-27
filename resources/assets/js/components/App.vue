<template>
    <div>
        <top-menu></top-menu>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu';
    import JWT from './../helpers/jwt';

    export default {
        created () {
            if (JWT.getToken()) {
                this.$store.dispatch('setAuthUser');
            }
        },
        components: {
            TopMenu
        }
    }
</script>
