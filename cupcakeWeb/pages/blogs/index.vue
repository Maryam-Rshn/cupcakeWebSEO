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
        <Pagination :perPage="perPage" :totalPages="totalPages" :currentPage= "currentPage" @pagechanged="onPageChange">
            <div v-for="product in newProducts" :key="product.id">
                <NuxtLink :to="{name: 'blogs-id', params: {id: product.id } }" class="nuxtLink">
                    <div class="product">
                        <img :src="link + product.imageUrl" alt="">
                        <h2>{{product.title}}</h2>
                    </div>
                </NuxtLink>
            </div>
        </pagination>
        <section class="footerSection">
            <FooterCompo />
        </section>
    </div>
</template>

<script>
import Pagination from '~/components/Pagination.vue';

export default {
    
    components: { Pagination },
    data() {
        return {
            link: "http://localhost:1337",
            totalItems: null,
            perPage: 3,
            totalPages: null,
            currentPage: 1,
            newProducts: [],
            // pageUnderEdit: null,
        };
    },
    computed: {
        products() {
            return this.$store.state.test.products;
        }
    },
    async fetch() {
        await this.$store.dispatch("test/getProductData");
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
            this.$router.push({path: this.$route.path, query: { page: this.currentPage }})
            localStorage.setItem('currentPage', JSON.stringify(this.currentPage))
            this.pickProducts(this.currentPage, this.perPage)  
        },
        pickProducts(page, limit) {
            this.newProducts = []
            const start = (page-1) * limit
            const picker = page * limit
            for(let i = start; i < picker; i++) {
                this.newProducts.push(this.products[i])
            }
        }
    },

    mounted() {
        this.totalItems = this.products.length
        console.log(this.totalItems, 'this is total items');
        this.totalPages = Math.ceil(this.totalItems / this.perPage)
        if(localStorage.getItem('currentPage')) {
            this.currentPage = JSON.parse(localStorage.getItem('currentPage'))
            this.$router.push({path: this.$route.path, query: { page: this.currentPage }})
        }
        this.pickProducts(this.currentPage, this.perPage)
    }
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
.product {
    display: flex;
    flex-direction: column;
    width: 199px;
    height: 242px;
    background: rgba(158, 118, 118, 0.33);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.28);
    border-radius: 33px;
    position: relative;
    align-items: center;
    gap: 40px;
}
.product::after {
    position: absolute;
    content: '';
    height: 57px;
    width: 198px;
    border-radius: 33px;
    background: rgba(158, 118, 118, 0.17);
    bottom: 0;
    left: 0;
}
.product h2 {
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
}
.product img {
    height: 115px;
    margin-top: 35px;
}
.product:hover::after {
    background: #594545;
    background-size: contain;
    content: url(../../assets/searchIcon.svg);
    position: absolute;
    top: 0;
    padding: 92px 0 92px 0;
}
.footerSection {
    background: rgba(158, 118, 118, 0.21);
    margin: 117px -118px -57px -118px;
    padding: 50px 110px 50px 110px;  
}
</style>