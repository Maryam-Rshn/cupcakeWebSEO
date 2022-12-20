<template>
    <div class="container">
        <NavBar />
        <section class="blogsHeroSection">
            <div class="HeroTitles">
                <h1>Here you can see different types of Cupcake.</h1>
                <h2>Click on them to see the recipe</h2>
            </div>
            <img src="../../assets/Illustration - Searching - Looking.png" alt="">
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.blogsHeroSection {
    margin: 58px -118px 0 -118px;
    padding: 112px 110px 112px 110px;
    background: #9E7676;
    position: relative;
    display: flex;
    justify-content: space-between;
}
.blogsHeroSection::after {
    clip-path: ellipse(50% 49% at 50% 50%);
    background-color: #FFF8EA;
    height: 114px;
    width: 1440px;
    content: '';
    position: absolute;
    bottom: -57px;
    left: 0;
}
.HeroTitles h1 {
    font-size: 55px;
    color: #FFF8EA;
    line-height: 84px;
    margin: 111px 0 0 0;
}
.HeroTitles h2 {
    font-size: 19px;
    color: #594545;
    letter-spacing: 0.29em;
    margin: 24px 0 0 0;
    font-weight: bold;
    position: relative;
    z-index: 1;
}
.HeroTitles h2::before {
    position: absolute;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    content: '';
    height: 80px;
    width: 60px;
    background: #ECDED3;
    transform: rotate(-41deg);
    z-index: -1;
    top: -27px;
}
.blogsHeroSection img {
    margin-top: -34px;
}
</style>