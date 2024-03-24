const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


// function pageTransitions(){
//     //button active class
//     for(let i =0 ; i< sectBtn.length ; i++){
//         sectBtn[i].addEventListener('click', function() {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
//             this.className += 'active-btn'; 
//         })
//     }
//     //sections active class
//     allSections.addEventListener('click' , (e) =>{
//         //console.log(e.target);
//         const id = e.target.dataset.id;
//         if(id){
//             //remove the selected from other btns
//             sectBtns.forEach((btn) => {
//                 btn.classList.remove('active')
//             })
//             e.target.classList.add('active')

//             //hide other sections
//             sections.forEach((section) => {
//                 section.classList.remove('active')
//             })

//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }

//     })
// }
function pageTransitions(){
    //button active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.classList.add('active-btn'); 

            //change page color based on button clicked
            const buttonColor = this.dataset.color;
            document.body.className = buttonColor;
        })
    }

    //sections active class
    for(var i=0 ; i<allSections.length ; i++){
    allSections[i].addEventListener('click' , (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove the selected from other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
        
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })
}

}
pageTransitions();
