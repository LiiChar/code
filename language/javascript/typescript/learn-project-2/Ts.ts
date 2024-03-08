// Функция принимаюзая спред = массив со строками
function run(name: string, ...skills: Array<string>): void {
    console.log(name, ...skills);

}
// всё чтл принимает переданная фунция обозначаем острактным именем и присваиваем
//  тип строки, а так же функция возвразате ничего = void
let a: (argFirst: string) => void;
function as(a: string) {
    console.log(a);

}
a = as

// Создание собственного типа, для разных объектов
type Person = { name: string, number: number, NickName?: string, getPass?: () => string }
let users: Person = {
    name: 'dsfs',
    number: 51312,
    NickName: 'Dgsfs'
}
let users1: Person = {
    name: 'dsfs',
    number: 51312,
    getPass: () => { return "adsfsd" }
}

// генерик должен быть строкой
class User <T extends string>{
    // Можно так присваивать переменные классы с внешними аргументами
    // public name: string
    // private age?: number
    // protected pass?: number
    // protected NickName?: string
    // constructor(name: string, age: 12, pass: 34, Nickname: 'asds'){
    //     this.name = name
    // } 
    // Более упрощённая версия

    static secret = 122
    constructor(
        public name: string,
        private age?: number,
        protected pass?: number,
        protected NickName?: T) 
    {}
    // Геттер для получения имени 
    public get value(): string {
        return this.name
    }
    // Геттер для изменения имени 
    public set value(v: string) {
        this.name = v;
    }
    public set Pass(v: number) {
        this.pass = v;
    }
    
    public getPassNum() {
        // Даже внутри класса, мы обращаемся через имя класса к статике
        return `${this.pass}${User.secret}`
    }
}
// let n = new User('sdfs')
// console.log(n.value);
// n.value = 'gfdgd'
// console.log(n.value);
// ___Обращение к статическому значению класса, 
// ___так можно обращаться только к статическим значениям класса
// console.log(User.secret);
// n.Pass = 412
// console.log( n.getPassNum());
// Изменение происходит как в обычном классе
// User.secret = 3123123123123
// console.log( n.getPassNum());

interface Userr {
    readonly name: string,
    ager: number,
    [prit: string]: any;
}

interface Userrr {
    live: number,
    [prit: string]: any,
}
// Наследование о т userr
interface admib extends Userr {
    quality: number
}
//  Юобавление интерфейсов к слассу с помощью implements
class fds implements Userr, admib {
    name = 'sad';
    ager  = 31
    live = 312
    quality = 312
}

function asda <T> (data: T): T {
    return data
}
// если в ф-цию поступтло числовое значение он вернёт число,
// или строку в случае прступления строки
asda<string>('sad') // указываем тип аргумента
// asda("sad") => "sad" - строка
asda<number>(321) // указываем тип аргумента
// asda(321) => 321 - число


// Утилиты

//  1 Readonly только для чтения
//  2 Required все поля обязательны 
//  3 Record созданеёт тип с указанным набором свойств