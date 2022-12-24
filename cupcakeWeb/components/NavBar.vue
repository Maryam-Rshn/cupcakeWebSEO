<template>
  <nav>
      <div class="logo">
        <img src="../assets/logoImage.png">
        <p>Cupcakes</p>
      </div>
      <div class="navContent">
        <div class="navLinks">
          <NuxtLink to="/" class="navLink">
            <p>home</p>
          </NuxtLink>
          <NuxtLink to="/blogs" class="navLink">
            <p>blogs</p>
          </NuxtLink>
          <NuxtLink to="/abouts" class="navLink">
            <p>about us</p>
          </NuxtLink>
        </div>
        <NuxtLink to="/blogs" class="navLink">
          <button class="navButton">start baking</button>
        </NuxtLink>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  height: 66px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.logo {
  height: 100%;
  display: flex;
  align-items: center;
}
.logo img {
  height: 66px;
  width: 66px;
}
.logo p {
  font-size: 33px;
  color: #9E7676;
}
.navContent, .navLinks {
  display: flex;
}
.navButton {
  margin-top: 13px;
  background-color: #9E7676;
  color: #FFF8EA;
  border-radius: 26px;
  padding: 16px 30px;
  font-size: 20px;
  font-family: Poppins;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
}
.navLinks {
  margin: 13px 65px 0 0;
  width: 344px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
}
.navLink {
  color: #594545;
  text-decoration: none;
  font-size: 20px;
}
.navLink:hover {
color: #9E7676;
}
.navButton:hover {
  background-color: rgba(158, 118, 118, 0.21);
  color: #9E7676;
}
</style>