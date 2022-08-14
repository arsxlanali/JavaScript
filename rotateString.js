function rotateString(string, num)
{
  length = string.length;
  while(num>length)
  {
    num = num - length;
  }
  var secondPart =  string.slice(num+1,length-1);
  return secondPart.concat(string.slice(0,num));
}

console.log(rotateString("JavaScript",3));
