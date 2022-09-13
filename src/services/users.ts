import octokit from "../configs/octokit";

export async function getUserList(user_amount = 10) {
  return await octokit.request("GET /users", {
    per_page: user_amount,
  });
}

export async function getUsersDetail(username: string) {
  return await octokit.request(`GET /users/${username}`, {
    username: username,
  });
}

export async function getUsersRepo(username: string) {
  return await octokit.request(`GET /users/${username}/repos`)
}

// List of users - https://api.github.com/users?per_page=<USERS_AMOUNT>
// User details page - https://api.github.com/users/<USER_LOGIN>
// User’s repositories -  https://api.github.com/users/<USER_LOGIN>/repos
