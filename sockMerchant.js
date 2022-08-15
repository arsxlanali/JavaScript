function sockMerchant(array)
{
  stack = [];
  pair = 0;
  for(let i=0; i<array.length; i++)
  {
    if(!stack.includes(array[i]))
    {
       stack.push(array[i]);
    }
    else
    {
      stack.pop();
      pair++;
    }
  }
  return pair;
}



console.log(sockMerchant([1,2,1,2,1,3,2,1,5]));
