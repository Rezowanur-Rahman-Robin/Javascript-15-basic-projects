const tabButtons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

const about = document.querySelector('.about');

about.addEventListener("click", function (e) {

    console.log(e.target.dataset.id);

    const id = e.target.dataset.id;

    tabButtons.forEach(function (tab) {

        if (tab.classList.contains('active')) {
            tab.classList.remove('active');
        }




    });



    e.target.classList.add('active');


    contents.forEach(function (content) {

        if (content.classList.contains('active')) {
            content.classList.remove('active');
        }

    });

    const targetContent = document.getElementById(id);
    targetContent.classList.add('active');
});