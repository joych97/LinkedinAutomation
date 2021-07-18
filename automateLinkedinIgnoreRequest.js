var x = document.querySelectorAll("button.artdeco-button--tertiary");
for (var i=0;i<x.length; i++){  /* This loop will find all the Ignore buttons and click them*/
	if(x[i].innerText == "Ignore"){
		x[i].click();
		for(var k=0;k<10000;k++){ /* This loop is to wait for the invitation withdrawn popup to appear and close it*/
			var z = document.querySelectorAll("button.artdeco-toast-item__dismiss");
			if(z.length > 0){
				z[0].click();
				k=10000;
				break;
			}
		}
		await new Promise(r => setTimeout(r, 2000)); /* This is just done because if we do not wait for sometime between 2 
														Ignore linkedin does not recognizes it.*/
	}
}