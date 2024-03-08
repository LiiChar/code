const easyvk = require('easyvk') // Подключаем easyvk

const path = require('path')

const USERNAME = '89028750246'
const PASSWORD = 'Qwerty24688642'



easyvk({ /** Авторизуемся */
    username: '89028750246',
    password: 'Qwerty24688642'
}).then(async (vk) => {
    let count = 0
    let a = setInterval(async() => {
        // if (count > 10) {
        //     clearInterval(a)
        // }
        let response = await vk.call('messages.send', {
            peer_id: `268805506`,
            message: "Всем привет!",
            random_id: easyvk.randomId()
        }, 3000)
        count = count + 1
        console.log(response)
    })


})