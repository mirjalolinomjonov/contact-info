import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [
      {
        name: "abubakir",
        phone: "+998 75 111 11 12",
        email: "abubakir@yandex.ru",
        tag: 1,
      },
      {
        name: "umar",
        phone: "+998 75 111 11 11",
        email: "umar@gmail.com",
        tag: 1,
      },
      {
        name: "yusuf",
        phone: "+998 90 000 00 00",
        email: "yusuf@gmail.com",
        tag: 2,
      },
      {
        name: "mirjalol inomjonov",
        phone: "+998 99 936 30 98",
        email: "mirjalolinomjonov@gmail.com",
        tag: 3,
      },
    ],
  },
  getters: {
    getFamily(state) {
      return state.contacts.filter((contact) => contact.tag === 1);
    },
    getWork(state) {
      return state.contacts.filter((contact) => contact.tag === 2);
    },
    getFriends(state) {
      return state.contacts.filter((contact) => contact.tag === 3);
    },
  },
  mutations: {
    CREATE_CONTACT(state, payload) {
      state.contacts.push(payload);
    },
    ADD(state, payload) {
      state.users.push(payload);
    },
    REMOVE(state, index) {
      state.contacts.splice(index, 1);
    },
    EDIT(state, payload) {
      state.contacts[payload.index] = payload.contact;
    },
  },
  actions: {},
  modules: {},
});
