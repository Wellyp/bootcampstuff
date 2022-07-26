#primitivedata
-----
#nonprimitive
const arr = [1,2,3]
console.log(typeof arr);

const obj = {
	nama : 'js',
	ipk : 3.14
}
console.log(typeof ob);

function nam(){
	return 'hallo'
}

console

#scopevariable 

// tidakbisa dirubah const
const arr = [1,2,3,4]
arr = [1,2]
console.log(arr);
// akan error

//kalo ingin ganti pake  push, contoh
const arr = [1,2,3,4]
arr.push (1,2)
arr.unshift(14)
console.log(arr);

let arr1 = [1,2,3,4]
arr1 = [1,2]
console.log(arr1);

#string manipulation

const phone = 'tlp:' +62851515151
console.log(phone);
//untuk panjang data =length
console.log(phone.length)
//untuk melihat character pada ke 3
console.log(phone.charAt(3))
// untuk cek awalan char true atau false, lse
console.log(phone.startsWith('t'))
// untuk cek akhir char true atau false, lse
console.log(phone.endsWith('t'))

console.log(phone.include('3'))


console.log(phone.indexOf('5'))

console.log(phone.substr('1,3'))

const address = `jl blblbla $(phone)`

console.log(address);

console.log(address.replace('jl', 'jalan'));

console.log(address.toLocalUppercase());
console.log(address.toLocalLowercase());

#Number
const n = 189.333
//merubah ke float
console.log(parseFloat(n));
//merubah ke integer
console.log(parseInt(n));
//merubah string ke number
const a = `123.333`
console.log(typeof Number(a));

const b= `ada`
//ini akan NaN soalnya bukan number
console.log(Number(b));
// untuk membulatkan, jadi hasil dibawah ada 3 dibelakang koma
const round = 123,4567
console.log(round.toFixed(3));
// untuk exponential jadi hasilnya 1,23e+2
console.log(round.toExponential(2));
//hasil format akan menjadi Rp. sekian
let formatCurrency = new intl.NumberFormat('ID',(style:'currenct',currency:'IDR')).format(round)
console.log(formatCurrency);

console.log(isNaN(`hello`));
console.log(isNaN(`45`));

#Math
//akar
console.log(Math.sqrt(9));
//pangkat
console.log(Math.pow(2,3));
//PI
console.log(Math.PI);
//membulatkan (round)
console.log(Math.round(4.232));
//membulatkan ke bawah
console.log(Math.floor(5,878));
//membulatkan ke atas
console.log(Math.cell(5,878));
//nilai tertinggi, hasil = 130
console.log(Math.max(33,2,130));
//nilai terendah, hasil = 2
console.log(Math.max(33,2,130));
//berubah ke absolute, (jadi hasil 123 alias tidak minus lagi)
console.log(Math.abs(-123));
//untukl ,mencari nili random
console.log(Math.random());

#Operator
//hasil true
console.log(15>12)
//hasil false
console.log(10.5<10.4)
//equaliti operator akan return 12 true
console.log(12=='12');
// akan return false karena tipe data beda
console.log(12==='12');
//infinity ??
console.lod(infinity);
//data paling tinggi di integer
console.lod(Number.MAX_SAFE_INTEGER);
//data paling rendah di integer
console.lod(Number.MIN_SAFE_INTEGER);
//akan false 
console.lod(Number.MIN_SAFE_INTEGER>infinity);

#LogicalOperator
//hasil akan true menggunakan &&
let isTrue = true && true
console.log(isTrue);
//hasil false
let isFalse = true && false
console.log(isFalse);
//equality operator hasil true
istrue = 10===10 && 10!==11
console log(isTrue)
//or op hasil true
isTrue = true || false
console.log(isTrue);
//or op hasil false
isFalse = false || false
console.log(isTrue);
// hasil false karena tidak bisa membandingkan string dan int
isFalse = 10 === '10'
console(isFalse);

#regular fucntion

function SayHello(){
	return 'hai Semua'
}
console.log(SayHello());

function MyName(firstName){
	return `hai Saya $(firstName)`
}
console.log(MyName('welly'));

function MyNames(firstName, lastNmae){
	return `hai Saya $(firstName)`
}
//console.log(MyName('welly'));

#callbackfunction

function SayHai(){
	console.log('halo');
}
function nAMA(){
	console.log('saya welly');
}
function all(callbackfunction){
	callbackfunction
}

#arroqfucnction

const SayHai = () =>{
	console.log('Hai')
}
const Name = ()=>{
	console.log('saya welly')
}
const all = (callBack) => {
	callBack()
	Name()
}
all(SayHai);

#AnonymousFunction

function all(){
	setTimeout(function(){
		console.log('Hai');
	},1000)
	setTimeout(function(){
		console.log('Saya welly');
	
	},2000)
}
all()
// 1000 dan 2000 ini milisecond jadi 1 dan 2 detik

#ifCondition
// MASUK KE D, JIKA NILAI 70 MASUK B
const score = 85
if (score >=80){
	console.log('A');
}
else if(score <80 && score >65){
	console.log('B');
}
else if(score <65 && score >= 55){
	console.log('C');
}
else {
	console.log('D');
}

function getScore (score){
	let grade;
	if (score >=80){
		grade = 'A';
	}
	else if(score <80 && score >65){
		grade = 'B';
	}
	else if(score <65 && score >= 55){
		grade = 'C';;
	}
	else {
		grade = 'D';
	}
	console.log(GRADE)
}
getScore(80);

#SwitchCase

function getDay(value){
	switch(value){
		case 1 :
			value = 'minggu'
			break;
		case 2 :
			value = 'senin'
			break;
		case 3 :
			value = 'minggu'
			breakselasa
		default:
		break;	
	}
	console.log(value);
}
// hasil akan minggu
getDay(3)