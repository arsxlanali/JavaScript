function frequentElement(array)
{
  let element;
  let count = 0;
  let countArary = [];
  for(let i = 0; i < array.length; i++)
  {
    if(count==0)
  	{
    	element = array[i];
  	}
    if(array[i]==element)
    {
      count++;
    }
    else
    {
      count--;
    }

    countArary[i] = count;
  }
  const max = Math.max(...countArary);
  const index = countArary.indexOf(max);
  return array[countArary.indexOf(max)];
}


array1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
console.log(frequentElement(array1));
