
const showBtn = document.querySelectorAll(".btn");

showBtn.forEach(btn =>{
    btn.addEventListener("click", function() {

        const answer = this.querySelector("p")
        const icons = this.querySelectorAll(`img`)
        

        if  ( ! answer.style.maxHeight){
            answer.style.maxHeight = answer.scrollHeight + 16 + `px`;
            answer.style.padding = `0.5rem 0px`;
            icons[0].style.display = 'none';
            icons[1].style.display = 'block';
            return;
        }
        answer.style.maxHeight = null;
        answer.style.padding =`0 0`;
        icons[0].style.display = 'block';
        icons[1].style.display = 'none';
    })
})