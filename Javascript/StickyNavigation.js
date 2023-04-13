// Get the position of the navigation bar and make it sticky when scrolling
var nav = document.querySelector('nav');
var navPosition = nav.getBoundingClientRect().top + window.scrollY;

function stickyNav() {
	if (window.scrollY > navPosition) {
		nav.classList.add('sticky');
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {
		nav.classList.remove('sticky');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', function() {
	requestAnimationFrame(stickyNav);
});

// Open links in new tabs when clicking on icons
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
	icon.addEventListener('click', () => {
		const url = icon.getAttribute('href');
		window.open(url, '_blank');
	});
});

// Function to toggle the visibility of dropdown menus
function toggleDropdown(id) {
	var dropdown = document.getElementById(id + "-dropdown");
	dropdown.classList.toggle("show");
}

// Function to filter items in a dropdown menu based on user input
function filterDropdown(id) {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById(id + "-input");
	filter = input.value.toUpperCase();
	div = document.getElementById(id + "-dropdown");
	a = div.getElementsByTagName("a");
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

// Function to hide dropdown menus when the user clicks outside of them
window.onclick = function(event) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	for (var i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			if (event.target.matches('.dropbtn')) {
				return;
			}
			if (event.target.matches('[id^="myInput"]')) {
				// do nothing if the clicked element is a search input
				return;
			}
			if (openDropdown.contains(event.target)) {
				// do nothing if the clicked element is inside the dropdown
				return;
			}
			// otherwise, hide the dropdown
			openDropdown.classList.remove('show');
		}
	}
}
