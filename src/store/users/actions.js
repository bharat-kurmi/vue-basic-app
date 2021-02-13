// import { userService } from './service/';
// userService.getUsers();

export default {
          async getUsersAction({ commit }, payload) {
                    try {
                              commit("mutateUsers", payload);
                    } catch (error) {
                              console.log("error", error);
                    }
          },
};
