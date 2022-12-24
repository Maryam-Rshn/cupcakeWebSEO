<template>
  <div class="container">
    <NavBar />
    <div class="cupcakeRecipe">
      <img :src="'http://localhost:1337' + products[index].imageUrl" alt="">
      <div class="recipeContent">
        <h1>{{products[index].title}}</h1>
        <p>{{products[index].content}}</p>
      </div>
    </div>
    <FooterCompo />
  </div>
</template>

<script>
export default {
  computed: {
    products() {
        return this.$store.state.test.products;
    },
    index() {
    return this.$route.params.id - 1
    }
  },
  async fetch() {
      await this.$store.dispatch("test/getProductData");
  },

  created() {
    console.log(this.$route.params.id, 'this is params')
  }
}
</script>

<style scoped>
.cupcakeRecipe {
  margin: 58px -60px 60px -60px;
  padding: 70px 60px 100px 60px;
  background-color: rgba(158, 118, 118, 0.21);
  border-radius: 33px;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
}
.cupcakeRecipe img {
  height: 371px;
}
.recipeContent h1 {
  color: #594545;
  font-size: 38px;
}
.recipeContent p {
  color: #594545;
  font-size: 19px;
  line-height: 59px;
  width: 720px;
}
</style>