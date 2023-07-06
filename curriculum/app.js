function creaNumeri() {

    let numeriDiv = document.getElementsByClassName("numeri-div")[0];
    let altezzaNumeriInPx = 18;
    let altezzaBody = document.body.offsetHeight;

    for (i = 1; i < (altezzaBody / altezzaNumeriInPx) + 1; i ++) {
        
        let numero = document.createElement("p");
       
        numero.className = "numeri-div";

        if (i < 10) {
            numero.innerHTML = "0" + i;
        } else {
            numero.innerHTML = i;
        }

        numeriDiv.appendChild(numero);
    }

}

function pageSize() {

    creaNumeri();

    window.addEventListener('resize', function(event) {
        if (this.window.innerWidth == 768) {
            console.log(this.window.innerWidth)
            creaNumeri();
        } 
        
        else if (this.window.innerWidth == 992) {
            creaNumeri();
        }
    }, true);

}
