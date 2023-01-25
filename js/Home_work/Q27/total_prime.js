
// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).



function checkPrime(n)
{
	if(n == 1 || n == 0)
     return false;
	
	for(var i = 2; i < n/2; i++)
	{
		
		if(n % i == 0)
         return false;
	}
	return true;
}


let num = 100;

for(var i = 1; i <=num; i++)
{
	if(checkPrime(i)) {
		console.log(i);
	}
}

