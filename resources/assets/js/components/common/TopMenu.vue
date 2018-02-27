<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand"> Vue - SPA </router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <router-link v-if="!user.authenticated" to="/login" tag="li">
                        <a>登陆</a>
                    </router-link>
                    <router-link v-if="!user.authenticated" to="/register" tag="li">
                        <a>注册</a>
                    </router-link>
                    <router-link v-if="user.authenticated" to="/profile" tag="li">
                        <a>个人中心</a>
                    </router-link>
                    <router-link v-if="user.authenticated" to="#" tag="li" @click.prevent="logout">
                        <a>退出</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    import JWT from './../../helpers/jwt';

    export default {
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods: {
            logout () {
                let _this = this;
                _this.$store.dispatch('logoutRequest').then(response => {
                    _this.$router.push({'name': 'index'});
                });
            }
        }
    }
</script>
