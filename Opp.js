
// class User{
//     constructor(name, salari){
//         console.log(name + ` ` + salari)
//     }
// }
// new User (`krokodil`, `1488`)

// class Employee{
//     constructor(name, salari){
//         this.name = name;
//         this.salari = salari; 
//     }
//     show(){
//         return this.name + ` - ` + this.salari + `wooden rubles`
//     }
// }
// let user = new Employee(`krokodil`, `2248`)
// console.log(user.show())   //1
// console.log(user.name)     //2 
// console.log(user.salari + `wooden rubles`)    //3
// console.log(+user.salari * 0.1 + 2248)   //4

// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(name, salri, age){
//         this.#name = name
//         this.#salri = salri
//         this.#age = age
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let user = new Employee('kishlambek', `120`, `23`)
// console.log(user.show())

// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(){
//         this.#name = 'kishlambek'
//         this.#salri = `120`
//         this.#age = `23`
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let user = new Employee
// console.log(user.show())


// class Employee{
//     #name;
//     #salri;
//     #age;

//     constructor(name, salri, age){
//         this.#name = name
//         this.#salri = salri
//         this.#age = age
//     }
//     show(){
// let ass = [this.#name, this.#salri ,this.#age]
// return ass
//     }
// }
// let kishlambek = new Employee('kishlambek', `120`, `23`)
// let serik = new Employee('serik', `30`, `18`)
// console.log(serik.show())


// class Employee {
//     #name
//     #salary
// 	constructor(name, salary) {
// 		this.#name = name;
// 		this.#salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.#salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
//     show() {
//         return this.#cape(this.#name);	}
	
// 	#cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new Employee(`kishlambek`, 200)
// console.log(user.getSalary(), user.show())

// class Employee {
//     #name
//     #salary
// 	constructor(name, salary) {
// 		this.#name = name;
// 		this.#salary = salary;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSalary() {
// 		return this.#salary;
// 	}
// }
// let user = new Employee
// user.name = `kishlambek`
// user.salary = `120`
// console.log(user.getName(), user.getSalary())

// class Employee {
//     #salary
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.#salary = salary;
// 	}
	
//     getSalary() {
// 		return this.#addSign(this.#salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }
// let user = new Employee(`kishlambek`, 300)
// console.log(user.getSalary(), user.name


// class Employee{
//     #name
//     #salary
//     #age

// constructor() {
//     this.#name = `kishlambek`;
//     this.#salary = `15`;
//     this.#age = `23`
// }
//     getName(){
//         return this.#name
//     }
//     getSalary(){
//         return this.#salary
//     }
//     getAge(){
//         return this.#age
//     }
//     getAll(){
//        return this.#name + ` ` + this.#salary + ` ` + this.#age
//     }
// }
// let user = new Employee;
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());
// console.log(user.getAll())



// class Employee{
//     #name
//     #salary
//     #age
//     getName(){
//         return this.#name
//     }
//     getSalary(){
//         return this.#salary
//     }
//     getAge(){
//         return this.#age
//     }
//     setName(name){
//         this.#name = name;
//     }
//     setSalary(salary){
//         this.#salary = salary;
//     }
//     setAge(age){
//         this.#age = age;
// }
// }
// let user = new Employee;
// user.setName(`kishlambek`)
// user.setSalary(`132`)
// user.setAge(`23`)
// console.log(user.getName());
// console.log(user.getSalary());
// console.log(user.getAge());

// class Employee{
  
//     setAge(age){
//         if (age.lenght < 120){
//             this.age = age
//         } 
//     }
//     getAge(){
//         return this.age
//     }
// }
// let user = new Employee
// user.setAge(`11`)
// console.log(user.getAge())


// class Employee{ 
//     #salari 
//     setSalari(salari){
//         this.#salari = salari
//     }
//         getSalari(){
//             return this.#salari
//         }
//     }
//     let user = new Employee
//     user.setSalari(`11`)
//     console.log(user.getSalari() + `$`)
    
// class Employee  {
// 	#name;
// 	#salari;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSalari(salari) {
// 		this.#salari = salari;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSalari() {
// 		return this.#salari;
// 	}
// }
// let user = new Employee
// user.setName('kishlambek').setSalari('1488');

// console.log(user.getName());
// console.log(user.getSalari() + `$`);


// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for(let user of users){
//     if(user instanceof Employee){
//         console.log(user.name)
//     }
// }
    

// class Validator{
//     getStr(str){
//         if(typeof(str) == 'string'){
//             console.log(`vazilin`)
//         }else{
//             console.log(`Увага:ОШИБКА`)
//         }
//     }
// }
// let stringi = new Validator  
// console.log(stringi.getStr(`hrjwnda`))

// class isEmail{
//     getEml(eml){
//         if(eml.includes(`@html.pl`) || eml.includes(`@gmail.com`)){
//         console.log(`Ошибка: Успех`)
//     }else{
//         console.log(`Попробуй ещё раз`)
//     }
// }
// }
// let due = new isEmail
// console.log(due.getEml(`worldcamshut@htlm.pl`))

// class isNumber{
//         getStr(str){
//             if(typeof(str) == 'number'){
//                 console.log(`zelebobka`)
//             }else{
//                 console.log(`ФАТАЛЬНАЯ ОШИБКА`)
//             }
//         }
//     }
//     let stringi = new Validator  
//     console.log(stringi.getStr(1488))

// class Position{
//     constructor(position){
//         this.name = position;
//     }
// }
// class Department{
//     constructor(department){
//         this.name = department;
//     }
// }
// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }
// let position = new Position(`slave`);
// let department = new Department(`ZiO Podolsk`);
// let user = new Employee(`kishlambek`, position, department);
// console.log(user.department.name);
// console.log(user.name);
// console.log(user.position.name);

// class Employee {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }

// let users = [
// 	new Employee('никитий'),
// 	new Employee('где'),
// 	new Employee('ссылка на'),
//     new Employee('твой onlifans? '),
// ];
// for (let user of users) {
// 	console.log(user.getName());
// }


// class Employee {
// 	#name;
// 	#salaru
// 	constructor(name, salaru) {
// 		this.#name = name;
//         this.#salaru = salaru
// 	}
// 	getName() {
// 		return this.#name;
// 	}
//     getSalar() {
// 		return this.#salaru;
// 	}
// }

// let users = [
// 	new Employee('никитий'),
// 	new Employee('ссылка'),
// 	new Employee('на boosty'),
//     new Employee('Где?'),
// ];
// let salaris = [
//     new Employee(`100`),
//     new Employee(`1488`),
//     new Employee(`4050`),
//     new Employee(`489`),
// ]
// for (let user of users) {
// 	console.log(user.getName());
// }
// for (let salari of salaris) {
// 	console.log(salari.getName());
// }




// class User {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }

// class EmployeesCollection{
// 	#users

// 	constructor(){
// 		this.#users = []
// 	}

// 	ass(user) {
// 		this.#users.push(user);
// 	}
// 	show(){
// 		for (let user of this.#users){
// 			console.log(user.getName())
// 		}
// 	}
// }
// let pers = new EmployeesCollection
// pers.ass(new User(`kishlambek`))
// pers.ass(new User(`serik`))
// pers.ass(new User(`berik`))
// pers.ass(new User(`masturbek`))
// pers.show()

// class User{
// 	#salary

// 		constructor(salary) {
// 		this.#salary = salary;
// 	}
// 	getSal() {
// 		return this.#salary;
// 	}
// }

// class EmployeesCollection{
// 	#salarys

// constructor() {
// 	this.#salarys = [];
// }
// add(salary) {
// 	this.#salarys.push(salary);
// }
// show() {
// 	for (let salary of this.#salarys) {
// 		console.log(salary.getSal());
// 	}
// }
// sum() {
// 	let ass = 0
// 	for (let salary of this.#salarys) {
// 		console.log(ass += salary.getSal());
// 	}
// }
// }
// let pers = new EmployeesCollection
// pers.add(new User(10))
// pers.add(new User(4))
// pers.add(new User(5))
// pers.add(new User(2))
// pers.show()
// pers.sum()


// class User{
// 	#salary

// 		constructor(salary) {
// 		this.#salary = salary;
// 	}
// 	getSal() {
// 		return this.#salary;
// 	}
// }

// class EmployeesCollection{
// 	#salarys

// constructor() {
// 	this.#salarys = [];
// }
// add(salary) {
// 	this.#salarys.push(salary);
// }
// show() {
// 	for (let salary of this.#salarys) {
// 		console.log(salary.getSal());
// 	}
// }
// sum() {
// 	let ass = 0
// 	for (let salary of this.#salarys) {
// 		console.log(ass += salary.getSal() / 4);
// 	}
// }
// }
// let pers = new EmployeesCollection
// pers.add(new User(10))
// pers.add(new User(4))
// pers.add(new User(5))
// pers.add(new User(2))
// pers.show()
// pers.sum()


// let reg = new RegExp;

// console.log(reg);
// console.dir(reg);

// console.log(reg instanceof RegExp);  //true


// let arr = [1, 2, 3];

// console.log(arr);
// console.dir(arr);

// console.log(arr instanceof Array);    //true


// let arr = new Array(1, 2, 3);

// console.log(arr);
// console.dir(arr);

// console.log(arr instanceof Array);      true

// let obj = {a: 1, b: 2, c: 3};

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);    true\


// let obj = new Object;

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);    true



// let elem = document.querySelector('div');
// console.dir(elem);    //div

// let elem = document.querySelector('input');
// console.dir(elem);     //input

// let elems = document.querySelectorAll('div');
// console.dir(elems);      //NodeList || div

// let elem = document.querySelector('div');
// let elems = elem.children;
// console.dir(elems);           //p || HTMLCollection








































//Никита где ссылка на onlifansOnlifans' и boosty'? 