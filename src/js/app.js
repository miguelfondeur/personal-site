// import { scrollIt } from './scroll';

/**
 * Run event after DOM is ready
 * @param  {Function} fn Callback function
 */
var ready = function ( fn ) {
	// Sanity check
	if ( typeof fn !== 'function' ) return;
	// If document is already loaded, run method
	if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
			return fn();
	}
	// Otherwise, wait until document is loaded
	document.addEventListener( 'DOMContentLoaded', fn, false );
};

//Event Delegation
function scrollTo(e) {
	e.preventDefault();
  if (e.target.matches('.scroll')){
		target = e.target.getAttribute("href");
		document.querySelector(target).scrollIntoView({behavior: 'smooth',block: "start"});
	}
}

// function expandCard(e) {
// 	document.querySelector('#work').scrollIntoView({behavior: 'smooth',block: "start"});
// 	//use class to open fixed page overlay and position paged fixed
// 	document.body.classList.toggle('with-overlay');
// 	//remove active class from all other cards?
// 	//add active class to target card and remove active class
// 	e.target.classList.toggle('active');
// }

// When ready
ready(function() {

	//Variables
	const scrollLink = document.querySelector('.scroll');
	const siteNav = document.querySelector('.site-nav');
	const workCards = document.querySelector('.work-card-wrapper');

	//Event Delegation
	siteNav.addEventListener('click', scrollTo);
	workCards.addEventListener('click', expandCard);


});


