const wrapper = document.querySelector('.wrapper');
let form = document.querySelector('.form');
let userinput = document.querySelector('.userinput');
const grid = document.querySelector('.grid');
let userTotal;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userinput.value);
    userTotal = userinput.value ** 2;
    console.log(userTotal);

    for (let i = 0; i < userTotal; i++) {
        // let newDiv = document.createElement('div');
        // newDiv.setAttribute('class', 'grid');
        // console.log(newDiv);
        // wrapper.appendChild(newDiv);
        console.log('four');
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid');
        wrapper.appendChild(newDiv);
        newDiv.style.width = 500 / userinput.value + 'px';
        newDiv.style.height = 500 / userinput.value + 'px';
        newDiv.style.backgroundColor = 'pink';
        newDiv.style.border = '1px solid aqua';

        if (userinput.value > 64) {
            break;
        }
        newDiv.addEventListener('contextmenu', function(E) {
            console.log(this)
            this.style.backgroundColor = 'red';
        })

        newDiv.addEventListener('click', function(E) {
            console.log(this)
            this.style.backgroundColor = 'pink';
        })




    }
});