function shortcut(s1, s2) {
  // your code here
	if (s1.length === 0 || s2.length === 0){

        return '';
    }

    const firstchas1 = s1.charAt[0];
    const firstchas2 = s2.charAt[0];

    return firstchas1 + firstchas2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
