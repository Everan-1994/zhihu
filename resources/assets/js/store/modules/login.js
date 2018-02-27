import JWT from './../../helpers/jwt';

export default {
    actions: {
        loginRequest({ dispatch }, formData) {
            return axios.post('/api/login', formData).then(response => {
                JWT.steToken(response.data.token);
                dispatch('setAuthUser');
            }).catch(error => {
                console.log(error.response.data);
            })
        },
        logoutRequest({ dispatch }) {
            axios.post('/api/logout').then(response => {
                JWT.removeToken();
                dispatch('unsetAuthUser');
            })
        }
    }
}