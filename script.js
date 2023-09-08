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
        // console.log(newDiv);
        wrapper.appendChild(newDiv);
        newDiv.style.width = '500px';
        newDiv.style.height = '500px';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.border = '1px solid white';


    }
});