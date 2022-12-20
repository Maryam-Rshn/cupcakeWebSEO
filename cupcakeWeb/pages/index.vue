<template>
  <div class="container">
    <NavBar />
    <section class="heroSection">
      <div>
        <h2>the ultimate cupcake baking guide</h2>
        <h1>Make people smile, with cupcakes.</h1>
        <button>recipe for cupcakes</button>
      </div>
      <img src="../assets/heroPic.png" alt="" width="518px" height="474px">
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
body {
  background-color: #FFF8EA;
  font-family: Poppins;
}
.container {
  margin: 0;
  background-color: #FFF8EA;
  padding: 50px 110px;
}
.heroSection {
  margin-top: 133px;
  display: flex;
  justify-content: space-between;
}
.heroSection h2 {
  color: #594545;
  font-size: 19px;
  letter-spacing: 0.29em;
  line-height: 28px;
  font-weight: 700;
  margin: 12px 0 0;
}
.heroSection h1 {
  color: #594545;
  font-size: 55px;
  line-height: 84px;
  font-weight: 700;
  margin: 15px 0 151px;
  width: 651px;
}
.heroSection button {
  background-color: #9E7676;
  color: #FFF8EA;
  border-radius: 74px;
  padding: 16px 30px;
  font-size: 23px;
  font-family: Poppins;
  border: 1px solid transparent;
}
.heroSection {
  margin-right: -60px;
}
</style>