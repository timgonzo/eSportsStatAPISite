/*

An example "slice" of state that is normailzed for posts

posts : {
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                comments : ["comment3", "comment4", "comment5"]
            }
        },
        all : ["post1", "post2"]
    },
*/

const state = {
  // user: {
  //   roles: [],
  //   userName: "",
  //   email: ""
  // },
  navigation: [],
  availableRoutes: [
    {
      path: "/login",
      component: "/compoentnets/path/to/Login.jsx"
    },
    {
      path: "/register",
      component: "/compoentnets/path/to/Register.jsx"
    }
  ],
  ui: {}, // for managig UI only based data
  notifications: {
    all: [],
    byId: {}
  }
  // cart: {
  //   count: 8,
  //   items: {
  //     all: [],
  //     byId: {}
  //   }
  // },
  // people: []
};

export default state;
