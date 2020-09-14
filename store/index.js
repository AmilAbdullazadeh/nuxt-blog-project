import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        vuexContext.commit("setPosts", [
          {
            id: 1,
            title: "Test title",
            subTitle: "Test title",
            text: "Test test",
            author: "Amil"
          }
        ]);
      }
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      }
    }
  });
};

export default createStore;
