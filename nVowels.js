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
// this is the compact from the vowels in the string
console.log(nVowels("Aeidjkd"));
