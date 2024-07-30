let num2 = prompt('Number');
function Reverse(num) {
  return +num.toString().split('').reverse().join('');
}
alert(Reverse(num2));