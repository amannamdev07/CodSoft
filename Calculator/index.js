let string = "";
let databtn = document.querySelectorAll('.databtn')
let clearBtn = document.querySelector('#clearBtn')
let calBtn = document.querySelector('#calBtn')
let backBtn = document.querySelector('#backBtn')

Array.from(databtn).forEach((databtn) => {
    databtn.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector('.resultInput').value = string;
            console.log('cal event is called');
        }
        else if (e.target.innerText == 'Back')
        {
            string = string.slice(0, -1)
            document.querySelector('.resultInput').value = string;
        }

        else {
            console.log(e.target);
            string += e.target.innerText;
            document.querySelector('.resultInput').value = string;
        }
    })
})


clearBtn.addEventListener('click', () => {
    string = "";
    document.querySelector('.resultInput').value = string;
})

