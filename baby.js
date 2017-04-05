var array = process.argv;
var suma=0;
for (var i=2;i<array.length;i++){
	suma += Number(array[i]) ;
}
console.log(suma);