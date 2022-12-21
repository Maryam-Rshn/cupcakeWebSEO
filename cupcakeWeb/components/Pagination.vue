<template>
    <div class="paginatonSection">
        <div class="productsContainer">
            <slot></slot>
        </div>
        <ul class="buttonContainer">
            <li>
                <button class="prevButton" @click="switchToPrev" :disabled="isInFirstPage()" :class="isInFirstPage() ? 'disabledPrev' : 'Button'">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg>
                </button>
            </li>
            <li><button @click="switchToFirstPage" v-if="firstPageAllowed()">1</button></li>
            <span v-if="isPageNumberlargerThanThree()">...</span>
            <li v-for="page in pages" :key="page.name">
                <button @click="switchToPage(page.name)" :disabled="page.isDisabled" :class="page.isDisabled ? 'disabledButton' : 'Button'">
                    {{page.name}}
                </button>
            </li>
            <span v-if="isPageNumberSmallerThanTen()">...</span>
            <li><button @click="switchToLastPage" v-if="lastPageAllowed()">{{totalPages}}</button></li>
            <li>
                <button class="nextButton" @click="switchToNext" :disabled="isInLastPage()" :class="isInLastPage() ? 'disabledNext' : 'Button'">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        perPage: Number,
        totalPages: Number,
        currentPage: Number
    },
    data() {
        return{
            maxVisibleButtons: 3,
            createNewBlog: false,
            
        }
    }, 
    computed: {
        products() {
            return this.$store.state.test.products;
        },
        startPage() {
            if(this.currentPage === 1) {
                return 1
            }
            if(this.currentPage === this.totalPages) {
                return this.totalPages - 2
            }
            return this.currentPage - 1
        },
        pages() {
            const range = []
            for(let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                })
            }
            return range
        },
    },

    methods: {
        isInFirstPage() {
            if(this.currentPage === 1) {
                return true
            }
        },
        isInLastPage() {
            if(this.currentPage === this.totalPages) {
                return true
            }
        },
        firstPageAllowed() {
            if(this.currentPage >= 3) {
                return true
            } else{
                return false
            }
        },
        isPageNumberlargerThanThree() {
            if(this.currentPage > 3) {
                return true
            } else{
                return false
            }
        },
        isPageNumberSmallerThanTen() {
            if(this.currentPage < this.totalPages - 2) {
                return true
            } else{
                return false
            }
        },
        lastPageAllowed() {
            if(this.currentPage <= this.totalPages - 2) {
                return true
            } else{
                return false
            }
        },
        switchToPrev() {
            this.$emit('pagechanged', this.currentPage - 1);
        },

        switchToFirstPage() {
            this.$emit('pagechanged', 1);
        },

        switchToPage(page) {
            this.$emit('pagechanged', page);
        },

        switchToLastPage() {
            this.$emit('pagechanged', this.totalPages);
        },

        switchToNext() {
            this.$emit('pagechanged', this.currentPage + 1);
        },


    },
    mounted() {
        // console.log(this.startPage, 'this is startPage');
        // console.log(this.pages, 'this is pages');
        // console.log(this.currentPage, 'this is current page');
        
    }
}
</script>

<style scoped>
.paginatonSection {
    margin-top: 116px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.productsContainer {
    display: flex;
    gap: 150px;
}
button {
    cursor: pointer;
    margin: 2px;
    background-color: #9E7676;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border-color: transparent;
    color: #FFFFFF;
    font-size: 10px;
    align-items: center;
    text-align: center;
}
.disabledButton {
    background-color: #9e76767f;
}
.buttonContainer {
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 156px;
    gap: 25px;
    padding: 0;
}
span {
    color: #9E7676;
    font-size: 30px;
    text-align: center;
    letter-spacing: 4px;
    margin-bottom: 15px;
}
.prevButton, .nextButton {
    background: transparent;
}
.prevButton {
    margin-right: 20px;
}
.nextButton {
    margin-left: 20px;
}
.prevButton svg, .nextButton svg {
    width: 29px;
    fill: #9E7676;
}
.disabledPrev svg, .disabledNext svg {
    fill: #9e76767f;
}
</style>