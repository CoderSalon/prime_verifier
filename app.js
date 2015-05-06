verifyButton.onclick = function(){
	var number = inputNumber.value, // number為輸入框的文字
		isPrime = true;

	// ==== 以下是你要寫程式的地方 ==== //

	for (var i=2; i<Math.sqrt(number)+1; i++){
		if(number%i===0){
			isPrime = false;
			break;
		}
	}

	// ====    以上是你的程式    ==== //

	// 	執行到這裡以後...
	// 	當number是質數時，isPrime應該是 true
	//  當number不是質數時，isPrime應該是 false

	if(isPrime){
		result.innerHTML=number+"是一個質數！";
	} else {
		result.innerHTML=number+"不是一個質數！";
	}
}