import Vue from "vue";

export default new Vue({
    data: {
        userSelected: null
    },

    methods: {
        changeSelectedUser(user) {
            this.$emit("changeSelectedUser", user);
        },
        onUserChanges(cbk) {
            this.$on("changeSelectedUser", cbk);
        }
    }
})