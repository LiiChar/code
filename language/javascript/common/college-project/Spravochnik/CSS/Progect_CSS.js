// Поисковая строка

// При наведении на иную область закрывается


let a = false
document.querySelector('#search').addEventListener('click', function(event) {
    
    const target = event.target.closest('.elevList')
    if (!target) {
        document.querySelector('.searchMetods').classList.toggle('hiden')
        a = true
    } else if (header) {
        document.querySelector('.searchMetods').classList.remove('hiden')
        a = false
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
  


// Поиск по буквамs



const cor = document.querySelector('#search');
cor.oninput = function (event) {
    event.preventDefault();
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

const core = document.querySelector('.wholeList');
core.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target.closest('.wholeList li').innerText;
    
    target = `#${target}`.replace('!', '').replace(':', '').replace(':', '').replace('@', '').replace('[', '').replace(']', '').replace('=', '').replace("'", "").replace("'", "").replace('', '').replace('', '')

    
    const a = document.querySelector(target);
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






// 2 версия навигатора

document.querySelector('#IE').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#I-E');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
    
}),

document.querySelector('#Firefox').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#F_F');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Opera').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#Operal');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#SafariandChrome').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#S_C');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#правила').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#Prav');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Селекторы').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#S_K');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Псевдоклассы').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#P_K');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Псевдоэлементы').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#P_E');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Функции').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#F_U');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#Cвойств').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#Z_S');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),
// ---------------------------------------------------------
document.querySelector('#btn_a').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_A');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_b').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_B');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_c').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_C');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_d').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_D');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_e').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_E');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_f').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_F');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

// document.querySelector('#btn_g').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#g');
//     ab.scrollIntoView

document.querySelector('#btn_h').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_H');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

// document.querySelector('#btn_i').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#i');
//     ab.scrollIntoView
// }),

// document.querySelector('#btn_j').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#j');
//     ab.scrollIntoView
// }),

// document.querySelector('#btn_k').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#k');
//     ab.scrollIntoView

document.querySelector('#btn_l').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_L');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_m').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_M');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

// document.querySelector('#btn_n').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#n');
//     ab.scrollIntoView
// }),

document.querySelector('#btn_o').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_O');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_p').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_P');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_q').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_Q');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_r').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_R');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

// document.querySelector('#btn_s').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#s');
//     ab.scrollIntoView
// }),

document.querySelector('#btn_t').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_T');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_u').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_U');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_v').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_V');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

document.querySelector('#btn_w').addEventListener('mousedown', function (event) {
    const ab = document.querySelector('#items_W');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}),

// document.querySelector('#btn_x').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#x');
//     ab.scrollIntoView
// }),

// document.querySelector('#btn_y').addEventListener('mousedown', function (event) {
//     const ab = document.querySelector('#y');
//     ab.scrollIntoView

// }),

document.querySelector('#btn_z').onclick = function () {
    const ab = document.querySelector('#items_Z');
    ab.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        function yesyellow() {
        ab.classList.toggle('gray');
    }

    setTimeout(yesyellow, 0);
    setTimeout(yesyellow, 3000)
}