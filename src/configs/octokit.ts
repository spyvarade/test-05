import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});
console.log(process.env.TOKEN)

export default octokit;