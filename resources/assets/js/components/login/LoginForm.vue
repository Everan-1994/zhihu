<template>
    <form class="form-horizontal" @submit.prevent="login">

        <div class="form-group" :class="{ 'has-error': errors.has('email') }">
            <label for="email" class="col-md-4 control-label">E-Mail</label>

            <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email"
                       v-validate data-vv-rules="required|email" data-vv-as="邮箱"
                       v-model="email" required>
                <span class="help-block" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
        </div>

        <div class="form-group" :class="{ 'has-error': errors.has('password') }">
            <label for="password" class="col-md-4 control-label">密码</label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password"
                       v-validate data-vv-rules="required|min:6" data-vv-as="密码"
                       v-model="password" required>
                <span class="help-block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    登陆
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import JWT from './../../helpers/jwt';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                let _this = this;
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let formdata = {
                            email: _this.email,
                            password: _this.password
                        };
                        _this.$store.dispatch('loginRequest', formdata).then(response => {
                            // console.log(response);
                            _this.$router.push({'name': 'profile'});
                        });
                    }
                });
            }
        }
    }
</script>
