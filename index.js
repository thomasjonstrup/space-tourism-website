// javascript
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener(
	"click",
	function () {
		// if the nav is closed, open it

		const visibility = nav.getAttribute("data-visible");
		console.log("visibility :>> ", visibility);

		if (visibility === "false") {
			nav.setAttribute("data-visible", true);
			navToggle.setAttribute("aria-expanded", true);
		} else {
			nav.setAttribute("data-visible", false);
			navToggle.setAttribute("aria-expanded", false);
		}

		if (!navToggle.classList.contains("mobile-nav-toggle--close")) {
			navToggle.classList.add("mobile-nav-toggle--close");
		} else {
			navToggle.classList.remove("mobile-nav-toggle--close");
		}
	},
	false
);
