<template>
  <div class="user-list">
    <div class="details" v-for="user in users" :key="user.id">
      <img class="avatar" :src="user.avatar_url" />
      <h1>{{ user.login }}</h1>
      <a class="link" @click.stop="userDetails(user.login)">github</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getUserList } from "@/services/users";

import { UserListResponse } from "@/services/types";

export default Vue.extend({
  name: "HomeView",
  components: {},
  data() {
    return {
      users: [] as UserListResponse[],
    };
  },
  methods: {
    usersList() {
      getUserList().then((response) => {
        console.log(response);
        this.users = response.data;
      });
    },
    userDetails(username: string) {
      this.$router.push({
        name: "user-details",
        params: { username: username },
      });
    },
  },
  created() {
    this.usersList();
  },
});
</script>
<style lang="scss">
.user-list {
  display: flex;
  direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 50px;
  .details {
    display: inline-block;
    flex-grow: 1;
    height: 200px;
    width: calc(100% * (1 / 5) - 10px - 1px);
    margin-bottom: 10px;
    .link {
      cursor: pointer;
    }
  }
}
</style>
