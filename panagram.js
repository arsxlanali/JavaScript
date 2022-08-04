function panagram(str)
{
  let array = [];
  for(let s of str)
  {
    s = s.toUpperCase()
    if(s.match(/[A-Z]/i) && !array.includes(s))
    {
      array.push(s);
    }
  }
  ;
  console.log(array.sort());
  if(array.length==26)
    return true;
  else
    return false;
}

console.log(panagram("The quick brown fox jumps over the lazy dog DD"));
