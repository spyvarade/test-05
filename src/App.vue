<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-item">
        <div class="github-logo">
          <img src="./assets/logo-github.png" />
        </div>
        <p class="nav-text">Github Userboard</p>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div>
        <img class="footer-github-logo" src="./assets/logo-github.png" />
        <p>© All rights reserved, 2022</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

nav {
  height: 80px;
  width: 100%;
  background: #24292f;
  color: #fff;
  .nav-item {
    display: flex;
    height: 80px;
    padding-left: 20px;
    align-items: center;
    .nav-text {
      margin-left: 10px;
    }
  }
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 120px;
  width: 100%;
  background: #24292f;
  color: #fff;
  text-align: center;
  .footer-github-logo {
    margin-top: 10px;
  }
}
</style>
