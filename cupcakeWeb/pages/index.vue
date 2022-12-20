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
    <section class="carouselSection">
      <h1>our most popular cupcakes</h1>
      <Carousel :optionsObject="optionsObject">
        <div class="slides" v-for="product in products" :key="product.id">
          <NuxtLink :to="{name: 'blogs-id', params: {id: product.id } }" class="nuxtLink">
            <div class="carouselDataContainer">
              <img :src="link + product.imageUrl" alt="">
              <h2>{{product.title}}</h2>
            </div>
          </NuxtLink>
        </div>
      </Carousel>
    </section>
    <section class="servicesSection">
      <h2>services</h2>
      <h1>Quality & Passion with our Service!</h1>
      <div class="servicesContainer">
        <div class="service">
          <div class="iconContainer">
            <img class="pastryIcon" src="../assets/pastryBag.png" alt="">
          </div>
          <p>Best cupcake decorating ideas</p>
          <button>Read More</button>
        </div>
        <div class="service">
          <div class="iconContainer">
            <img class="icon" src="../assets/iconmonstr-time-19-240.png" alt="">
          </div>
          <p>Quick and Easy  Cupcake Recipe</p>
          <button>Read More</button>
        </div>
        <div class="service">
          <div class="iconContainer">
            <img class="icon" src="../assets/iconmonstr-shopping-cart-thin-240.png" alt="">
          </div>
          <p>Using Ingredients that are Easy to Access</p>
          <button>Read More</button>
        </div>
        <div class="service">
          <div class="iconContainer">
            <img class="icon" src="../assets/iconmonstr-medal-6-240.png" alt="">
          </div>
          <p>Award winning cupcake recipes</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      optionsObject : {
        // breakpoint: 1200,
        itemsPerSlide: 3,
        itemsPerStep: 2,
        loop: true,
        dots: true,
        itemsMargin: null,
        arrows: true
      },
      link: "http://localhost:1337",
    }
  },
  computed: {
      products(){
          return this.$store.state.test.products.filter((product) => {
            return product.id <= 6
          });
      }
  },
  async fetch () {
      await this.$store.dispatch('test/getProductData')
  },
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
.carouselSection {
  margin: 88px -118px 0 -118px;
  background: #9E7676;
  padding: 112px 110px 112px 110px;
  position: relative;
}
.carouselSection h1 {
  font-size: 34px;
  line-height: 51px;
  text-align: center;
  letter-spacing: 0.29em;
  color: #FFF8EA;
  margin: 0;
}
.carouselSection::before, .carouselSection::after {
  clip-path: ellipse(50% 49% at 50% 50%);
  background-color: #FFF8EA;
  height: 114px;
  width: 1440px;
  content: '';
  position: absolute;
}
.carouselSection::before {
  left: 0;
  top: -57px;
}
.carouselSection::after {
  bottom: -57px;
  left: 0;
}
.nuxtLink {
  text-decoration: none;
  color: #FFF8EA;
  text-align: center;
}
.carouselDataContainer img {
  height: 206px;
  width: 206px;
  border-radius: 50%;
}
.carouselDataContainer h2 {
  font-size: 18px;
}
.servicesSection {
  margin: 78px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.servicesSection h2 {
  font-size: 19px;
  letter-spacing: 0.29em;
  color: #594545;
  margin: 0;
}
.servicesSection h1 {
  font-size: 45px;
  text-align: center;
  color: #594545;
  width: 635px;
  margin: 20px 0;
}
.servicesContainer {
  margin-top: 49px;
  display: flex;
  gap: 30px;
}
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconContainer {
  height: 160px;
  width: 160px;
  position: relative;
  background-image: url(../assets/servicesBackground.png);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 60px;
  height: 60px;
  margin-top: 40px;
}
.pastryIcon {
  width: 76px;
  height: 76px;
  margin-top: 20px;
}
.service p {
  margin: 65px 0 20px 0;
  font-size: 22px;
  line-height: 45px;
  text-align: center;
  color: #594545;
  width: 260px;
}
.service button {
  background-color: #9E76763B;
  border-color: transparent;
  padding: 12px 40px;
  border-radius: 26px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #594545;
}
</style>