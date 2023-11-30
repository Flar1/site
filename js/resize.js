const imgs = document.querySelectorAll(".resizeble");
const root = document.body;
let isVisible = false;

const showPopup = (target) => {
    if (!isVisible && target.classList[1] == 'resizeble'){
        let id = target.id;
        const popup = document.createElement('img');
        const layout = document.createElement('div');

        isVisible = true;
        popup.classList.add('visible');
        layout.classList.add('layout');

        if (id == 1) {
            popup.src = "..//img/image\ 1.jpg";
        }else if (id == 2){
            popup.src = "..//img/image\ 2.jpg";
        }else if (id == 3){
            popup.src = "..//img/image\ 4.jpg";
        }else if (id == 4){
            popup.src = "..//img/image\ 3.jpg";
        }
        
        root.appendChild(popup);
        root.appendChild(layout);
    }else {
        isVisible = false;
        const popup = document.querySelector('.visible');
        const layout = document.querySelector('.layout');

        popup?.parentNode.removeChild(popup);
        layout?.parentNode.removeChild(layout);

    }
}


document.addEventListener('click', (e) => {
    showPopup(e.target);
})    