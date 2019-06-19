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
  navigation: [],
  availableRoutes: [
    {
      path: "/login",
      component: "/componets/path/to/Login.jsx"
    },
    {
      path: "/register",
      component: "/componets/path/to/Register.jsx"
    }
  ],
  ui: {}, // for managing UI only based data
  notifications: {
    all: [],
    byId: {}
  },

  //Tim's Contributions Here:

  user: {
    id: 4,
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    roles: []
  },
  leagues: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 4205
  },
  series: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 1732
  },
  tournaments: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 2411
  },
  matches: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 0
    //Use tournament ID for select
  },
  teams: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 3210
  },
  players: {
    count: 0,
    pageIndex: 1,
    pageSize: 8,
    items: {
      all: [],
      byId: {}
    },
    selectedId: 17513
  }
};

export default state;
