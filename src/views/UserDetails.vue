<template>
  <div class="user-details">
    <div class="user-header">
      <img class="avatar" :src="user.avatar_url" /> 
      <h1>{{ user.login }}</h1>    
    </div>
    
    <div class="repos" v-for="repo in repos" :key="repo.id">
      <a href="#">{{ repo.name }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getUsersDetail, getUsersRepo } from "@/services/users";
import { UserDetailResponse, UserRepoResponse } from "@/services/types";

export default Vue.extend({
  name: "UserDetails",
  components: {},
  data() {
    return {
      user: {} as UserDetailResponse,
      repos: [] as UserRepoResponse[],
    };
  },
  methods: {
    usersDetail(username: string) {
      getUsersDetail(username)
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
          return response;
        })
        .then(() => {
          return getUsersRepo(username);
        })
        .then((response) => {
          this.repos = response.data;
          console.log(this.repos);
        });
    },
  },
  created() {
    this.usersDetail(this.$route.params.username);
  },
});
</script>
<style lang="scss" scoped>
.user-details {
  .user-header{
    text-align: center;
  }

  .avatar {
    width: 200px;
    height: 200px;
  }
  .repos{
    text-align: center;
  }
}
</style>
