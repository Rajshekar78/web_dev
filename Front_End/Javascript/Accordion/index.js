const tabButtons = document.querySelectorAll('.tab__button');
        
        tabButtons.forEach((e) => {
            e.addEventListener("click", (e) => {
                if (e.target.classList.contains('tab__button-active')) {
                    e.target.classList.add("tab__button-active");
                    e.target.nextElementSibling.style.height = e.target.nextElementSibling.firstElementChild.clientHeight + 60 + "px";
                    e.target.nextElementSibling.classList.add("tab__panel-active");
                } else {
                    e.target.classList.remove("tab__button-active");
                    e.target.nextElementSibling.style.height = "0px";
                    e.target.nextElementSibling.classList.remove('tab__panel-active');
                }
            });
        });