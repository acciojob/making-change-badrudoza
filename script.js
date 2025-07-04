const makeChange = (c) => {
	c = Number(c); // Ensure input is a number
    let q = 0, d = 0, n = 0, p = 0;
  // your name here
	if(c>=25){
		let q=Math.floor(c/25);
	c%=25;
	}
	if(c>=10){
			let d=Math.floor(c/10);
	c%=10;
	}
	if(c>=5){
		let n=Math.floor(c/5);
		c%=5;
	}
	let p=c;
	return {
		"q":q,
		"d":d,
		"n":n,
		"p":p
	};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
