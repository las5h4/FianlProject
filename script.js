window.addEventListener("load", function (){
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute('class') === 'buttons') {
            buttons[i].onclick = function () {
                this.className = 'buttonSelected'
            }
            
        }
    }
    buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute('class') === 'buttonSelected'){
            buttons[i].onclick = function () {
                this.className = 'buttons'
            }
        }
    };
});