<template>
    <form class="form-horizontal" @submit.prevent="register">

        <div class="form-group" :class="{ 'has-error': errors.has('name') }">
            <label for="name" class="col-md-4 control-label">账号</label>

            <div class="col-md-6">
                <input id="name" type="text" class="form-control" name="name"
                       v-validate data-vv-rules="required|min:6" data-vv-as="账号"
                       v-model="name" required autofocus>
                <span class="help-block" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
        </div>

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

        <div class="form-group" :class="{ 'has-error': errors.has('password_confirmation') }">
            <label for="password-confirm" class="col-md-4 control-label">确认密码</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control"
                       v-validate data-vv-rules="required|confirmed:password|min:6" data-vv-as="确认密码"
                       name="password_confirmation" required>
                <span class="help-block" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    注册
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data () {
          return {
              name: '',
              email: '',
              password: ''
          }
        },
        methods: {
            register () {
                let _this = this;
                let formdata = {
                    name: _this.name,
                    email: _this.email,
                    password: _this.password
                };
                axios.post('/api/register', formdata).then(response => {
                    if (response.status) {
                        _this.$router.push({'name': 'confirm'});
                    }
                });
            }
        }
    }
</script>
