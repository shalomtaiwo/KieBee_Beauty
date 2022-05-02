class kieBee{
    constructor(){
    this.navPage();
    this.subscribePopup();
    this.formSubmitEvents();
    }

    navPage(){
        this.contactUs = document.querySelector('#contactUs');
        this.contactPage = document.querySelector('#contactPage');
        this.homeLink = document.querySelector('#homePage');
        this.homePage = document.querySelector('.homePage');
        this.contactUs.addEventListener('click',(event)=>{
            this.contactPage.style.display = "flex";
            this.homePage.style.display = "none";
        })
        this.homeLink.addEventListener('click',(event)=>{
            this.contactPage.style.display = "none";
            this.homePage.style.display = "block";
        })
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
        })
    }

    formSubmitEvents(){
        this.form = document.querySelector('form');
        document.addEventListener('submit',(event)=>{
            event.preventDefault();
        })
    }
}

const hello = new kieBee ();