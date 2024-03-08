

//  Поиск при нажатии Enter


const ver = document.querySelector('#hell')
ver.addEventListener('submit', function(event) {
    event.preventDefault();

    let val = document.querySelector('#hell input').value;
    val = `#${val}`.replace('!', '').replace(':', '').replace(':', '').replace('@', '').replace('[', '').replace(']', '').replace('=', '').replace("'", "").replace("'", "")
    let sor = document.querySelector(val);
    console.log(sor)
    sor.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'})
        
    
    function yesyellow() {
        sor.classList.toggle('onyellow');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
    
});
  
// При наведении на иную область закрывается
let a = false
document.querySelector('#search').addEventListener('click', function(event) {
    const target = event.target.closest('.elevList')
    if (!target) {
        document.querySelector('.searchMetods').classList.toggle('hiden')
        a = true
    } else {
        document.querySelector('.searchMetods').classList.remove('hiden')
        a = false
    }
})

document.querySelector('.main').addEventListener('click', function(event) {
    if (a) {
        document.querySelector('.searchMetods').classList.remove('hiden')
        a = false
    } 
})
 
// Найдённые буквы выделяются жёлтым

function issertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos+len)
}

//  поиск по буквам

const cor = document.querySelector('#search');
cor.oninput = function ( ) {
    let val = this.value.trim();
    let elasticItem = document.querySelectorAll('.wholeList li');
    console.log(val)
    if(val != "") {
        elasticItem.forEach(element => {
            if (element.innerHTML.search(val) == -1) {
                element.classList.add('sp');
                element.innerHTML = element.innerText
            } else {
                element.classList.remove('sp'); 
                let str = element.innerText;
                element.innerHTML = issertMark(str, element.innerText.search(val), val.length)
            }
        });
    } else {
        elasticItem.forEach(element => {
            element.classList.remove('sp')
            element.innerHTML = element.innerText
        });
    }
}

document.querySelector('.main').addEventListener('click', function(event) {
    
    if (a) {
        document.querySelector('.searchMetods').classList.remove('hiden')
        a = false
    }
})

// ПРи нажатии перемещается к связанному элементу 


document.querySelector('.wholeList').addEventListener('click', function (event) {
    let target = event.target.closest('.wholeList li').innerText;
    
    target = `#${target}`.replace('!', '').replace("-", "").replace("-", "").replace("-", "").replace("-", "").replace(' ', '')
    console.log(target);
    
    const a = document.querySelector(target);
    console.log(a)
    a.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
    
    function yesyellow() {
        a.classList.toggle('onyellow');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
})





// document.querySelector('#search').oninput = function () {
//     let val = this.value.trim();
//     console.log(val)
//     let searchVal = document.querySelector('.wholeList li')
//     if (val != '') {
//         searchVal.forEach(element => {
//             if (element.innerText.search(val) == -1) {
//                 element.classList.add('hide')
//             } else {
//                 element.classList.remove('hide')
//             }
//         });
//     }
// }

// 3 версия навигатора полурабочий, выводит только первый элемент


document.querySelector('.main_1').addEventListener( "click" , function (event) {
    const target = event.target.closest('.main_element').innerText;
    console.log(target)
    const scroll = document.getElementById(target)
    scroll.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
    function yesyellow() {
        scroll.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
})

// 2 версия навигатора

// document.querySelector('#btn_woskl').addEventListener('mousedown', function (event) {

//     const ab = document.querySelector('#items_woskl');
//     ab.scrollIntoView();
// })
// document.querySelector('#btn_a').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_A');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_b').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_B');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_c').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_C');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_d').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_D');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_e').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_E');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_f').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_F');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_h').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_H');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_i').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_I');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_k').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_K');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_l').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_L');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_m').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_M');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_n').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_N');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_o').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_O');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_p').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_P');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_q').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_Q');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_r').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_R');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_s').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_S');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_t').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_T');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_u').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_U');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_v').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_V');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_w').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_W');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_x').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_X');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_y').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#items_Y');
//     ab.scrollIntoView();
// }),
// document.querySelector('#btn_z').onclick = function () {
//     const ab = document.querySelector('#items_Z');
//     ab.scrollIntoView();
// }