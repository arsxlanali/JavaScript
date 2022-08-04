function nVowels(str)
{
	let count = 0;
  	vowels = ['A','E','I','O','U'];
  	for (const s of str) 
    {  	
		if(vowels.some(element => element==s.toUpperCase()))
		{
  			count++;
		}
	}
  	return count;
}

console.log(nVowels("Aeidjkd"));
