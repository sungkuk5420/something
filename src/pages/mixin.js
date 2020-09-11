import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
let myMixin = {
    computed: {
        ...mapGetters({
            loginUser: "getLoginUserInfo"
        }),
    },
    created() { },
    watch: {
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        removeLoginSesstion() {
            this.$q.cookies.remove("loginUser", { path: "/" });
            this.$q.cookies.remove("token", { path: "/" });
        },
    }
};
export default myMixin;
