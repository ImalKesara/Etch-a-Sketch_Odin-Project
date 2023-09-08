const wrapper = document.querySelector('.wrapper');
let form = document.querySelector('.form');
let userinput = document.querySelector('.userinput');
const grid = document.querySelector('.grid');
const erase = document.querySelector('button');
let userTotal;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userinput.value);
    userTotal = userinput.value ** 2;
    console.log(userTotal);

    for (let i = 0; i < userTotal; i++) {
        console.log('four');
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid');
        wrapper.appendChild(newDiv);
        newDiv.style.width = 500 / userinput.value + 'px';
        newDiv.style.height = 500 / userinput.value + 'px';
        newDiv.style.backgroundColor = 'white';
        newDiv.style.border = '1px solid aqua';

        if (userinput.value > 64) {
            break;
        }
        newDiv.addEventListener('click', function(E) {
            console.log(this)
            this.style.backgroundColor = 'red';
        })

        erase.addEventListener('click', () => {
            newDiv.addEventListener('mouseover', function(E) {
                console.log(this)
                this.style.backgroundColor = 'white';
            })
        })





    }
});