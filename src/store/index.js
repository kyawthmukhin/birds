import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        birdData: [],
    },
    mutations: {
        birdLists(state, dataCollection) {
            state.birdData = dataCollection;
            console.log(state.birdData);
        }
    },
    actions: {
        async getData(context) {
            let response = await axios.get('Birds.json');
            let data = await response.data;
            let dataCollection = data.Tbl_Bird;
            console.log(dataCollection);
            context.commit('birdLists', dataCollection);
        }
    }, 
    getters: {

    }
});
export default store;