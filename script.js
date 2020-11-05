window.onload = function(){



    let plan = document.getElementsByClassName('buy__plan')[0]
    let price = document.getElementsByClassName('buy__price')[0]
    let selectCount = document.getElementsByClassName('number-select')[0]
    let us = document.getElementById('US')
    let radio = document.getElementsByTagName('input')
    for(let i = 0; i < radio.length; i++){
        radio[i].addEventListener('click', function(){
            removeActive()
            this.classList.add('active')
            plan.innerHTML = 'Selected plan:   ' + this.value
            price.innerHTML = '$' + this.getAttribute('data-price') * selectCount.value
            us.style.display = 'block'
        })
    }


    /*Update Total price when selected new count*/
    selectCount.onclick = updateTotalPrice

    function updateTotalPrice(){
        for(let i = 0; i < radio.length; i++){
            if(radio[i].classList.contains('active')){
                price.innerHTML = '$' + radio[i].getAttribute('data-price') * selectCount.value
            }
        }

    }

    /*Remove class 'Active' from all radio button*/
    function removeActive(){
        for(let i = 0; i < radio.length; i++){
            radio[i].classList.remove('active')
        }
    }

}
