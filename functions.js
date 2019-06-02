function displayForm(prefSelect) {
	if (prefSelect) {
		prefOption = document.getElementById("yesOption").value;
		if (prefOption == prefSelect.value) {
			document.getElementById("survey").style.display = "block";
		}
		else {
			document.getElementById("survey").style.display = "none";
		}
	}
	else {
		document.getElementById("survey").style.display = "none";
	}
}
