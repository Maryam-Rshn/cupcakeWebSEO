<template>
  <div class="container">
    <NavBar />
    <section class="heroSection">
      <div>
        <h2>the ultimate cupcake baking guide</h2>
        <h1>Make people smile, with <span>cupcakes.</span></h1>
        <NuxtLink to="/blogs">
          <button>recipe for cupcakes</button>
        </NuxtLink>
      </div>
      <img src="../assets/heroPic.png" alt="" width="518px" height="474px">
    </section>
    <section class="carouselSection">
      <h1>our most popular cupcakes</h1>
      <Carousel :optionsObject="optionsObject">
        <div class="slides" v-for="product in products" :key="product.id">
          <NuxtLink :to="{name: 'blogs-id', params: {id: product.id } }" class="nuxtLink">
            <div class="carouselDataContainer">
              <div class="carouselImage">
                <img :src="link + product.imageUrl" alt="">
              </div>
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
    <section class="qouteSection">
      <h1>What people think about our website</h1>
      <div class="qouteContainer">
        <div class="qouteContent">
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"><rect width="43" height="43" fill="#FFF8EA"/><path d="M21.5 1.7915C10.1444 1.7915 0 9.36309 0 19.7207C0 23.3936 1.32225 27.0003 3.66754 29.7988C3.76608 33.0776 1.83467 37.7825 0.09675 41.2082C4.75867 40.3661 11.386 38.5063 14.3907 36.6645C30.9385 40.6904 43 30.5639 43 19.7207C43 9.30755 32.7857 1.7915 21.5 1.7915ZM21.5 19.7583C21.5 23.9455 18.7605 26.7638 14.8995 27.5252L14.1721 25.9665C15.9566 25.2946 17.105 23.1231 17.105 21.4998H14.3333V14.3332H21.5V19.7583ZM30.4583 19.7583C30.4583 23.9455 27.7189 26.7638 23.8578 27.5252L23.1304 25.9665C24.9149 25.2946 26.0634 23.1231 26.0634 21.4998H23.2917V14.3332H30.4583V19.7583Z" fill="#9E7676"/></svg>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
          <h1>Paul Cookson</h1>
        </div>
        <img src="../assets/pavan 574.png" alt="">
        <div class="qouteContent">
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"><rect width="43" height="43" fill="#FFF8EA"/><path d="M21.5 1.7915C10.1444 1.7915 0 9.36309 0 19.7207C0 23.3936 1.32225 27.0003 3.66754 29.7988C3.76608 33.0776 1.83467 37.7825 0.09675 41.2082C4.75867 40.3661 11.386 38.5063 14.3907 36.6645C30.9385 40.6904 43 30.5639 43 19.7207C43 9.30755 32.7857 1.7915 21.5 1.7915ZM21.5 19.7583C21.5 23.9455 18.7605 26.7638 14.8995 27.5252L14.1721 25.9665C15.9566 25.2946 17.105 23.1231 17.105 21.4998H14.3333V14.3332H21.5V19.7583ZM30.4583 19.7583C30.4583 23.9455 27.7189 26.7638 23.8578 27.5252L23.1304 25.9665C24.9149 25.2946 26.0634 23.1231 26.0634 21.4998H23.2917V14.3332H30.4583V19.7583Z" fill="#9E7676"/></svg>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
          <h1>Jacob Lett</h1>
        </div>
      </div>
    </section>
    <FooterCompo />
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
button {
  cursor: pointer;
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
.heroSection h1 span {
  position: relative;
}
.heroSection h1 span::before {
  content: url(../assets/underLine.svg);
  position: absolute;
  top: 85px;
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
.heroSection button:hover {
  background-color: rgba(158, 118, 118, 0.21);
  color: #9E7676;
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
.carouselImage {
  height: 206px;
  width:206px;
  background-color: #FFF8EA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carouselDataContainer img {
  height: 107px;
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
.service button:hover {
  color: #9E7676;
}
.qouteSection {
  margin: 79px -118px 93px -118px;
  background: #9E7676;
  padding: 112px 110px 112px 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qouteSection h1 {
  font-size: 34px;
  color: #FFF8EA;
  margin: 0;
}
.qouteContainer {
  display: flex;
  margin-top: 53px;
  align-items: center;
  width: 1220px;
  justify-content: space-between;
  /* gap: 117px; */
}
.qouteContent {
  padding: 39px 38px 41px 38px;
  background-color: #FFF8EA;
  border-radius: 50px;
  color: #9E7676;
}
.qouteContent p {
  margin: 29px 0 21px 0;
  font-size: 13px;
  line-height: 28px;
  width: 251px;
}
.qouteContent h1 {
  color: #9E7676;
  font-size: 15px;
}
.qouteContainer img {
  width: 292px;
  height: 430px;
}
</style>