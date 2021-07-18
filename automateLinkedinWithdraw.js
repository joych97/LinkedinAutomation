async function automateLinkedin(){
var x = document.querySelectorAll("button.artdeco-button--tertiary");
for (var i=0;i<x.length; i++){  /* This loop will find all the withdraw buttons and click them*/
	if(x[i].innerText == "Withdraw"){
		x[i].click();
		var y = document.querySelectorAll("span.artdeco-button__text");
		var j=1;
		while(j<y.length){ /* This loop is for the new popup that comes after clicking on withdraw */
			if(y[j].innerText == "Withdraw"){
				y[j].click();
				j=y.length
				break;
			}
			j=j+1;
		}
		for(var k=0;k<10000;k++){ /* This loop is to wait for the invitation withdrawn popup to come and close it*/
			var z = document.querySelectorAll("button.artdeco-toast-item__dismiss");
			if(z.length > 0){
				z[0].click();
				k=10000;
				break;
			}
		}
		await new Promise(r => setTimeout(r, 2000)); /* This is just done because if we do not wait for sometime between 2 
														withdraws linkedin does not recognizes it.*/
	}
}}