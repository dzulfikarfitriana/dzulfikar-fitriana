import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            title: 'Repo List',
            repos: []
        }
    }
})

export default store