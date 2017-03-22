
// Output text into span
function showText(text, spanID) {
    document.getElementById(spanID).innerHTML = text;
}

// Toggle between the two states
function toggleRandomCaps() {
    document.getElementById('randCapsText').innerHTML = document.getElementById('toggleCapsCB').checked ? 'tOggle rANdOM cAps' : 'Toggle random caps';
}

// Generate and show password
function generatePassword() {
    if (document.getElementById("useNumCB").checked)
        var numsNo = document.getElementById("numNoSlider").value;
    var usingPunct = document.getElementById("usePunctCB").checked;
    if (document.getElementById("mustContainCB").checked)
        var wordToUse = document.getElementById("wordToUseTB").value;
    var usingRandCaps = document.getElementById("toggleCapsCB").checked;
    var wordsNo = document.getElementById("wordsNoSlider").value;

	// Add words
    var pass = "";
	
	var e = document.getElementById("separator");
	var separator = e.options[e.selectedIndex].value;
	
	var xmlHttp = new XMLHttpRequest();
	for (var i = 0; i < wordsNo; ++i){		
		if (i > 0) pass = pass.concat(separator);
		xmlHttp.open("GET", "http://www.setgetgo.com/randomword/get.php", false);
		xmlHttp.send();
		pass = pass.concat(xmlHttp.responseText);
	}
	
	// Add mustContainCB
	if (document.getElementById("mustContainCB").checked) {
		pass = wordToUse;
	}
	
	// Add numbers
	var nums = ''; 
	for (var i = 0; i < numsNo; ++i){
		nums = nums.concat(Math.floor((Math.random() * 10)));
	}
	pass = pass.concat(nums);
    showText(pass, "passwordLabel");
}