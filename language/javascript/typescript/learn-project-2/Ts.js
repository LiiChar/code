"use strict";
// Функция принимаюзая спред = массив со строками
function run(name, ...skills) {
    console.log(name, ...skills);
}
// всё чтл принимает переданная фунция обозначаем острактным именем и присваиваем
//  тип строки, а так же функция возвразате ничего = void
let a;
function as(a) {
    console.log(a);
}
a = as;
let users = {
    name: 'dsfs',
    number: 51312,
    NickName: 'Dgsfs'
};
let users1 = {
    name: 'dsfs',
    number: 51312,
    getPass: () => { return "adsfsd"; }
};
// генерик должен быть строкой
class User {
    constructor(name, age, pass, NickName) {
        this.name = name;
        this.age = age;
        this.pass = pass;
        this.NickName = NickName;
    }
    // Геттер для получения имени 
    get value() {
        return this.name;
    }
    // Геттер для изменения имени 
    set value(v) {
        this.name = v;
    }
    set Pass(v) {
        this.pass = v;
    }
    getPassNum() {
        // Даже внутри класса, мы обращаемся через имя класса к статике
        return `${this.pass}${User.secret}`;
    }
}
// Можно так присваивать переменные классы с внешними аргументами
// public name: string
// private age?: number
// protected pass?: number
// protected NickName?: string
// constructor(name: string, age: 12, pass: 34, Nickname: 'asds'){
//     this.name = name
// } 
// Более упрощённая версия
User.secret = 122;
//  Юобавление интерфейсов к слассу с помощью implements
class fds {
    constructor() {
        this.name = 'sad';
        this.ager = 31;
        this.live = 312;
        this.quality = 312;
    }
}
function asda(data) {
    return data;
}
// если в ф-цию поступтло числовое значение он вернёт число,
// или строку в случае прступления строки
asda('sad'); // указываем тип аргумента
// asda("sad") => "sad" - строка
asda(321); // указываем тип аргумента
// asda(321) => 321 - число
// Утилиты
//  1 Readonly только для чтения
//  2 Required все поля обязательны 
//  3 Record созданеёт тип с указанным набором свойств
