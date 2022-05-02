class kieBee{
    constructor(){
    this.navPage();
    this.subscribePopup();
    this.formSubmitEvents();
    }

    navPage(){
        this.contactUs = document.querySelector('.contact');
        this.contactPage = document.querySelector('#contactPage');
        this.aboutLink = document.querySelector('.aboutUs');
        this.shopLink = document.querySelector('.shopWithUs');
        this.homeLink = document.querySelector('.homeLink');
        this.homePage = document.querySelector('.homePage');
        this.mobileMenu = document.querySelector('.mobileDropDown');
        this.mobileBurger = document.querySelector('.kSpace');
        this.mobileBurger.addEventListener('click',(event)=>{
            if(this.mobileMenu.style.display == 'block'){
                this.mobileMenu.style.display = "none";
            }
            else{
                this.mobileMenu.style.display = "block";
            }
        });
        this.contactUs.addEventListener('click',(event)=>{
            this.contactPage.style.display = "flex";
            this.homePage.style.display = "none";
        });
        this.homeLink.addEventListener('click',(event)=>{
            this.contactPage.style.display = "none";
            this.homePage.style.display = "block";
        });
        this.aboutLink.addEventListener('click',(event)=>{
            alert('Coming Soon! Feel free to send us a message and subscribe to stay in tuned!');
        });
        this.shopLink.addEventListener('click',(event)=>{
            alert('Coming Soon! Feel free to send us a message and subscribe to stay in tuned!');
        });
    }

    subscribePopup(){
        // Setting up the subscribe Form Popup
        this.closeSubs = document.querySelector('.subsClose');
        this.subsColumn = document.querySelector('.subsColumn');
            setTimeout(() => {
                this.subsColumn.style.display = "block";
            }, 2000);
        this.closeSubs.addEventListener('click',(event)=>{
            this.subsColumn.style.display = "none";
        });
    }

    formSubmitEvents(){
        this.form = document.querySelector('form');
        document.addEventListener('submit',(event)=>{
            event.preventDefault();
        });
    }
}

const hello = new kieBee ();