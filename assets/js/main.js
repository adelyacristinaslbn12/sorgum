    /****Show Menu *****/
const searchButton = document.getElementById('search-button'),
searchClose =document.getElementById('search-close'),
searchContent = document.getElementById('search-content')

 /****Show Menu *****/
 if(searchButton){
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
    }
  /****Menu Hidden *****/
  if(searchClose){
    searchClose.addEventListener('click',() => {
        searchContent.classList.remove('show-search')
    })
  }

   /****Login *****/
const loginButton = document.getElementById('login-button'),
loginClose =document.getElementById('login-close'),
loginContent = document.getElementById('login-content')

 /**** login Show *****/
 if(loginButton){
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
    }
  /****Login Hidden *****/
  if(loginClose){
    loginClose.addEventListener('click',() => {
        loginContent.classList.remove('show-login')
    })
  }

  /**** ADD SHOW HEADER *****/
  const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
  } 
  window.addEventListener('scroll', shadowHeader)

    /**** Home Swiper *****/
    let swiperHome = new Swiper('.home__swiper', {
      // Optional parameters
      loop: true,
      spaceBetween: -24,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: 'auto',

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        1220: {
          spaceBetween: -32,
        }

      }

    });

     /**** Featured Swiper *****/
     let swiperFeatured = new Swiper('.featured__swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: 'auto',

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1150: {
        slidesPerView: 4,
        centeredSlides: false,
        }

      }

    });
    /**** New Swiper *****/
    let swiperNew = new Swiper('.new__swiper', {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
    
      breakpoints: {
        1150: {
        slidesPerView: 3, 
        }

      }

    });

    /**** Testimonial Swiper *****/
    let swiperTestimonial = new Swiper('.testimonial__swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: 'auto',

      breakpoints: {
        1150: {
        slidesPerView: 3,
        centeredSlides: false,
        }
      }
    });
    
     /**** Scroll Up *****/
     const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')
     }
     window.addEventListener('scroll', scrollUp)

       /**** Scroll Sections Active Link *****/
       const sections =  document.querySelectorAll('section[id]')

       const scrollActive = () => {
        const scrollDown = window.scrollY

        sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
        }

        )
       }
       window.addEventListener('scroll', scrollActive)



     /**** Dark Light *****/
     const themeButton = document.getElementById('theme-button')
     const DarkTheme = 'dark-theme'
     const iconTheme = 'ri-sun-line'

     const selectedTheme = localStorage.getItem('selected-theme')
     const selectedIcon = localStorage.getItem('selected-icon')
     
     const getCurrentTheme = () => document.body.classList.contains(DarkTheme) ? 'dark' : 'light'
     const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

     if(selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](DarkTheme)
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
     }

     themeButton.addEventListener('click', () => {
      document.body.classList.toggle(DarkTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
     })

      /**** Scroll Reveal Animation *****/
      const sr = ScrollReveal({
        origin : 'top',
        distance: '60px',
        duration: 2500,
        delay : 400,
        //reset: true, //animations repeat
      }) 
      sr.reveal(`.home__data, .featured__container, .new__container,
        .join__data, .testimonial__container, .footer`)
      sr.reveal(`.home__images`, {delay: 600})
      sr.reveal(`.services__card`, {interval: 100})
      sr.reveal(`.discount__data`, {origin: 'left'})
      sr.reveal(`.discount__images`, {origin: 'right'})

      


     