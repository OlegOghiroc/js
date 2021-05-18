// const playlist = {
//   name: 'list',
//   rating: 5,
//   tracks: ['трек - 1', 'трек - 2', 'трек - 3'],
//   trackCount: 3,
// };
// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist['rating']);
// // значення  перемінної завжди передається як строка.

// const propertyName = 'tracks';
// console.log(playlist[propertyName]);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys){
// values.push(key);
//   values.push(apartment[keys]);
// }
// console.log(values[keys]);

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.apply(order, [index + 1])
// );
// console.log(messages);

// задача 10 4 модуля
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// function Storage (items){
// this.items = items;
// }
// Storage.prototype.getItems = function(){
// return this.items;
// }
// Storage.prototype.addItem = function (newItem){
// this.items.push(newItem);
// }
// =====================ВИДАЛЕННЯ В МАСИВІ===================
// ====================Storage.prototype.removeItem = function (removeItem){
// for (const item of removeItem){
// this.item.splice(this.item.indexOf(removeItem)1)}========================================
// }
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ==========класи наслідування===========

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails;

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel;



//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklistedEmails=[];
// blacklist(email){
//   this.blacklistedEmails.push(email);
//   };

//   isBlacklisted(email){
// if(this.blacklistedEmails.includes(email)){
//   return true;
// }
//   return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
];


// TIMER
// class CountdownTimer {
//     constructor ( selector, targetDate ) {
//         this.selector = selector;
//         this.targetDate = new Date( targetDate );
//         this.timer = this.timer.bind( this );
//     };
//     timer () {
//         const day = document.querySelector( '[data-value="days"]' );
//         const hour = document.querySelector( "[data-value='hours']" );
//         const minute = document.querySelector( "[data-value='mins']" );
//         const second = document.querySelector( "[data-value='secs']" );
//         const currentDate = Date.now();
//         this.time = this.targetDate - currentDate;
//         const days = Math.floor( this.time / ( 1000 * 60 * 60 * 24 ) );
//         const hours = Math.floor( ( this.time % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
//         const mins = Math.floor( ( this.time % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
//         const secs = Math.floor( ( this.time % ( 1000 * 60 ) ) / 1000 );
//         day.textContent = days;
//         hour.textContent = hours;
//         minute.textContent = mins;
//         second.textContent = secs;
//         if( days < 10 ) {
//             day.textContent = `0${days}`;
//         }
//         if( hours < 10 ) {
//             hour.textContent = `0${hours}`;
//         }
//         if( mins < 10 ) {
//             minute.textContent = `0${mins}`;
//         }
//         if( secs < 10 ) {
//             second.textContent = `0${secs}`;
//         }
//     }
//     start () {
//         setInterval( this.timer, 1000 );
//     }
// }
// const countdownTimer = new CountdownTimer( "#timer-1", "2020 december 31 20:00" );
// countdownTimer.start();