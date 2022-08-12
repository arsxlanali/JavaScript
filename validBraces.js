// Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean
// indicating whether the given string contains a valid nesting of braces.


function validBraces(string)
{
  var stack = [];
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;
  for(let i=0;i<string.length;i++)
  {
    if(string[i]=='{')
    {
      stack.push('{');
      console.log(stack);
      flag1++;
    }
    else if(string[i]=='(')
    {
      stack.push('(');
      flag2++;
    }
    else if(string[i]=='[')
    {
      stack.push('[');
      flag3++;
    }
    else if(string[i]=='}' || stack[stack.length-1]=='{')
    {
      stack.pop();
      flag1--;
    }
    else if(string[i]==')' || stack[stack.length-1]=='(')
    {
      stack.pop();
      flag2--;
    }
    else if(string[i]==']' || stack[stack.length-1]=='[')
    {
      stack.pop();
      flag3--;
    }
  }
  console.log(flag1, flag2, flag3, stack);
  if(flag1==0 && flag2==0 && flag3==0)
  {
    return true;
  }
  else
  {
    return false;
  }
}



console.log(validBraces("{{[}}]"));
