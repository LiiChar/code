const si = require('systeminformation');
const os = require('node:os');
const uuid = require('uuid')

// let ComDataPS1 = {}

// si.system().then(data =>{
//     console.log(os.hostname());
//      ComDataPS1.name_PC = data.model
//      ComDataPS1.serial_num = data.serial
//      ComDataPS1.type_PC = data.manufacturer
// }).then((data) => {
//     console.log(ComDataPS1);
// })


// si.cpu().then(data =>{
//      a = data
// })

// console.log(a);

let ComDataPS = {}
let dataPS = {}
let sysPlate = {}
let hardDisk = {}

valueObject = {
    osInfo: 'arch, release, kernel',
    system: 'manufacturer, sku, serial, model, uuid',
    bios: 'releaseDate',
    users: '*',
    diskLayout: 'name, type, serialNum, size, smartData'
}

si.get(valueObject).then((data, rejected) => {
    ComDataPS.type_PC = data.system.manufacturer
    ComDataPS.name_PC = os.hostname()
    ComDataPS.inventory_num = data.system.sku
    ComDataPS.serial_num = data.system.serial
    ComDataPS.network_name = data.system.model
    ComDataPS.prod_date = new Date()

    dataPS.name_PC = os.hostname()
    dataPS.OS_bit_dept = data.osInfo.arch
    dataPS.OS_version = data.osInfo.release
    dataPS.OS_versionCore = data.osInfo.kernel
    dataPS.reboot_num = Math.floor(Math.random() * 1000)
    dataPS.install_date = data.bios.releaseDate
    dataPS.local_user_account_num = data.users.length
    dataPS.license_key = data.system.uuid

    hardDisk.hard_disk_name = data.diskLayout.name
    hardDisk.hard_disk_type = data.diskLayout.type
    hardDisk.hard_disk_serial_num = data.diskLayout.serialNum
    hardDisk.hard_disk_capacity = data.diskLayout.size
    hardDisk.hard_disk_rotation =Math.floor(Math.random() * 10000)
    hardDisk.registration_num = uuid.v4()
    hardDisk.SMART_data = data.diskLayout.name
}).then((data) => {
    console.log("Общие данные о пк", ComDataPS);
    console.log("данные пк", dataPS);
    console.log("Жёсткие диски", hardDisk);
})




// Название операционной системы
// Разрядность операционной системы
// Версия операционной системы
// Версия ядра операционной системы
// Дата установки операционной системы
// Информация о количестве перезагрузок
// Информация о количестве локальных учетных записей пользователей
// Ключ лицензии 

// si.usb().then((data) => {
//     console.log(data);
// })