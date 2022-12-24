<template>
    <div class="carousel" ref="carousel">
      <div class="slider-wrapper">
        <div class="inner" ref="inner">
          <slot></slot>
        </div>
      </div>
      <div class="carousel-nav">
        <button class="prev" @click="switchToPrev()">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg>
        </button>
        <button class="next" @click="switchToNext()">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </button>
      </div>
      <div class="carousel-dots-wrapper" ref="dotsWrapper">
        <button v-for='index in this.numberOfDots' :key='index' :class="[ 'carousel-dot', `step-${index}` ]" :step="index" @click='switchToStep(index)'></button>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "Carousel",
      props: {
        optionsObject: Object,
      },
      
      data() {
        return {
          innerWidth: 0,
          slideWidth: 0,
          stepSize: 0,
          currentStep: 0,
          innerPosition: 0,
          numberOfDots: 0,
          slider: '',
          isMouseDown:false,
          startpointCoordinate: null,
          isDistPositive: false,
        }
      },
  
      methods: {
        calculateInnerPosition( decrease ) {
          if ( decrease ) {
            if ( this.optionsObject.loop && this.innerPosition <= 0 ) {
              this.innerPosition = this.innerWidth - (this.slideWidth * this.optionsObject.itemsPerStep);  
            } else if ( this.innerPosition > 0 ){
              this.innerPosition -= this.stepSize;
            }
          } else {
            if(this.optionsObject.loop && this.innerPosition >=  this.innerWidth - (this.slideWidth * this.optionsObject.itemsPerSlide) ) {
              this.innerPosition = 0;
            }
            else{
              this.innerPosition += this.stepSize
            }
          }
        },
  
        switchToNext() {
          this.calculateInnerPosition( false );
          this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
          this.findandActivateCurrentStep()
        },
  
        switchToPrev() {
          this.calculateInnerPosition( true );
          this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
          this.findandActivateCurrentStep()
        },
  
        switchToStep( step ) {
          this.innerPosition = this.stepSize * ( step - 1);
          this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
          this.findandActivateCurrentStep()  
        },
  
        findandActivateCurrentStep() {
          if (this.optionsObject.dots) {
            this.currentStep = this.innerPosition / this.stepSize + 1;
            const dotButtons = document.querySelectorAll( `.carousel-dot` );
            dotButtons.forEach(dot => dot.classList.remove( "active" ))
            document.querySelector( `.carousel-dot[step="${ this.currentStep }"]` ).classList.add( "active" );
          }
        },
  
        startScroll() {
          this.isMouseDown = false;
          this.slider.classList.remove('active');
          if(!this.isDistPositive) {
            this.switchToNext()
            this.findandActivateCurrentStep()
          } else {
            this.switchToPrev()
            this.findandActivateCurrentStep()
          }
        },
        mouseDown(e) {
          this.isMouseDown = true;
          this.slider.classList.add('active');
          this.startpointCoordinate = e.pageX;
        },
        mouseMove(e) {
          if(this.isMouseDown) {
            e.preventDefault();
            const endPointCoordinate = e.pageX;
            const dist = (endPointCoordinate - this.startpointCoordinate);
            if(dist < 0) {
              this.isDistPositive = false
            } else {
              this.isDistPositive = true
            }
          }
        }
      },
  
      mounted() {
  
        // variables
        const innerSelector = this.$refs.inner;
        const slidesSelector = document.querySelectorAll( `.slides` );
        const carouselWidth = innerSelector.clientWidth;
  
        // calculated variables
        this.slideWidth = ( carouselWidth / this.optionsObject.itemsPerSlide );
        this.stepSize = this.slideWidth * this.optionsObject.itemsPerStep;
        this.numberOfDots = Math.ceil( ( slidesSelector.length - this.optionsObject.itemsPerSlide ) / this.optionsObject.itemsPerStep) + 1;
        
  
        // add width for slides
        for (let i = 0; i < slidesSelector.length; i++) {
          slidesSelector[i].style.cssText = `min-width:${ this.slideWidth }px !important;`;
        }
  
        
        // set variables after adding slides width and margins
        this.innerWidth = this.slideWidth * slidesSelector.length;
  
        // draggable slider
        this.slider = document.querySelector('.inner');
        this.slider.addEventListener('mousedown', this.mouseDown);
        this.slider.addEventListener('mousemove', this.mouseMove);
        this.slider.addEventListener('mouseup', this.startScroll);
      },
    }
  </script>
  
  <style  scoped>
  
    .carousel {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 3rem;
      margin: 50px 20px;
  
    }
    .slider-wrapper {
      width: 100%;
      overflow: hidden;
      margin: 50px 20px;
    }
  
    .inner {
      display: inline-flex;
      align-items: baseline;
      transition: 0.3s all ease;
      width: 100%;
    }
    .inner.active {
        cursor: grab;
    }
    .slides{
      display: flex;
      justify-content: center;
    }
  
    .carousel-nav {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 105%;
    }
    .testimonials-carousel{
        width: 100%;
        top: 45%;
    }
    svg {
      fill: #594545;
      width: 50px;
    }
  
    button {
      background-color: unset;
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
    }
    .carousel-dots-wrapper {
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .carousel-dot {
      padding: 0;
      width: 7px;
      height: 7px;
      border-radius: 15px;
      background-color: #FFF8EA;
      border: none;
      margin: 3px;
      cursor: pointer;
      transition: 0.2s all linear;
    }
    .carousel-dot.active {
      background-color: #594545;
      width: 20px;
    }
    
  </style>