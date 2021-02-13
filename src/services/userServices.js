import axios from "axios";
const userServices = {
          getUsers(value) {
                    return axios.get("/users", value);
  },
  login(value) {

  },
  regster() {
    
  }
      
};

export default userServices;
