    let logo = document.querySelector('.logo');
    let hamberger = document.querySelector('.hamberger');
    let x = document.getElementById('x');

    logo.addEventListener("click" , () => {
    hamberger.classList.add("active");
  })
  
    x.addEventListener("click" , () => {
        hamberger.classList.remove("active");
    })
  
  