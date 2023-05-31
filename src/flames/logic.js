 function flame(name1,name2)
{

	var flames=['f','l','a','m','e','s'];
	var i,j,k=-1,count=0;
	var relation;
	name1=name1.trim().toLowerCase();
	name2=name2.trim().toLowerCase();
	var array1=name1.split("");
	var array2=name2.split("");
	var big=array1.length>array2.length?array1:array2;
	var small=array1.length<array2.length?array1:array2;
	for(i=0;i<big.length;i++)
	{
		for(j=0;j<small.length;j++)
		{
			if(big[i]===small[j])
			{
			big[i]=small[j]='\0';
			break;
			}
		}
	
	}
	for(i=0;i<big.length;i++)
	if(big[i]!=='\0')
	count++;
	for(j=0;j<small.length;j++)
	if(small[j]!=='\0')
	count++;
	for(i=0;i<flames.length-1;i++)
	{
		for(j=1;j<=count;j++)
		{
			k++;
			if(k>=flames.length)
			k=0;
			while(flames[k]==='\0')
				{
			k++;
			if(k>=flames.length)
			k=0;
		
			}
		}
		flames[k]='\0';
	}
for(i=0;i<flames.length;i++)
if(flames[i]!=='\0')
	relation=flames[i];

 return relation;
}




export default flame;