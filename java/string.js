function reversestring(str){
      return str.split('').reverse().join('');
}   
const string= prompt('Enter a string to reverse:');
const result=reversestring(string);
console.log(result);

function countvowel(str){
 const count=str.match(/[aeiou]/gi).length;
 return count;
}
const string2=prompt('Enter a string to count vowel:');
const result2=countvowel(string2);
console.log(result2);

function anagram(str1,str2){
      let n1=str1.length;
      let n2=str2.length;
      
      if(n1 !=n2)
            return false;
      
      let x=str1.split("").sort().join("");
      let y=str2.split("").sort().join("");
      
      if(x==y)
            return true;
      else
            return false;  
} 

const str3=prompt('enter a string to check anagram:');
const str4=prompt('enter a string to check anagram:');

if(anagram(str3,str4))
      console.log("The two strings are anagram of each other");
else
    console.log("The two strings are not anagram of each other");

function turncate(str,maxLength){
      if(str.length >maxLength){
            return str.slice(0,maxLength-3) + '...';
      }
      return str;
}
const string3=prompt('enter a string to turncate:');
const result3=turncate(string3,prompt('enter a number:'));
console.log(result3);
   

   const str1=prompt('Enter some word to replace check');
   const str5=str1.replaceAll('i','#').replaceAll('a','*').replaceAll('e','!'); 

console.log(str5);

let arrange=prompt('enter a sentance arrange in alphebetic');
let rate=arrange.split(" ");
rate.sort(function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(rate);

let str6=prompt('enter a string to count:');
let str2=/[a-zA-z0-9]/g;
console.log(str6.match(str2).length);

let str =prompt('enter a string:');
let rate2 = /^[A-Za-z]+$/.test(str);
console.log(rate2);