<template>
  <div>
            <h1>Home</h1>
            <h2>{{ getTitle }}</h2>
            <table>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
              <tr v-for="(user, index) in getUSers" :key="index">
                <td> {{ index }}</td>
                <td> {{ user.name }} </td>
                <td> {{ user.email }} </td>
              </tr>
            </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
          name: "Home",
          data() {
                    return {
                        users: [
                            { name: "A", email: "A@a.com" },
                            { name: "B", email: "B@a.com" },
                            { name: "C", email: "C@a.com" },
                        ],
                    };
          },
          created() {
                    this.getUsersAction(this.users);
          },
          computed: {
                    ...mapGetters("users", ["getUSers", "getTitle"]),
          },
          methods: {
                    ...mapActions("users", ["getUsersAction"]),
          },
};
</script>
