//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime (...numbers){
    for(let i=0;i<numbers.length;i++){
        let isPrime=true;
        const item = numbers[i];
        for (let i = 0; i < item + 1; i++) {
          if (item % i == 0 && i != 1 && i != item) {
            isPrime = false;
          }
        }
        if (isPrime == true) {
          console.log("Number: " + item + " is a prime number.");
        } else {
          console.log("Number: " + item + " is not a prime number.");
        } 
    }
}
findPrime(2,6,8,98);

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 

const isFriend=(number1,number2)=>{
  let total1=0;
  let total2=0;

  for(let i=1;i<number1;i++){
    if(number1 %i === 0){
       total1+=i
    }
  }

  for(let i=1;i<number2;i++){
    if(number2 %i === 0){
      total2+=i
    }
  }
  return(total1===number2 && total2===number1) ? "friend are numbers" : "friend are not a numbers"
  
}

console.log(isFriend(220,284));

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


for (var num=1; num<=1000; num++)
{
    var total = 0;
    for (var i = 1 ; i < num ; i++) {
      if(num %i === 0)  
        total += i;
    }

    if (total == num) 
      console.log(num + " perfect is a number");
	
}

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function isPrimeNumbers(){
  for (let i = 1; i < 1000; i++) {
    let counter=0;
     for (let j = 2; j < i; j++) {
         if(i % j == 0){
             counter++ ;
         } 
     }
     if(counter==0 || i==2) {
       console.log(i+  "prime is a number");
      }
  }
}
isPrimeNumbers();
