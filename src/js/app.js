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
		var targetDiv = e.target.getAttribute("href");
		document.querySelector(targetDiv).scrollIntoView({behavior: 'smooth',block: "start"});
	}
}

//Preload Class
window.addEventListener("load", function(event) {
  //remove preloader
  document.body.classList.remove('preload');
});

// function expandCard(e) {
// 	document.querySelector('#work').scrollIntoView({behavior: 'smooth',block: "start"});
// 	//use class to open fixed page overlay and position paged fixed
// 	document.body.classList.toggle('with-overlay');
// 	//remove active class from all other cards?
//   //add active class to target card and remove active class
//   e.target.classList.toggle('active');
// }

// When ready
ready(function() {

	//Variables
	const scrollLink = document.querySelector('.scroll');
	const siteNav = document.querySelector('.site-nav');
  const workCards = document.querySelectorAll('.work-card-wrapper .example-card');

  for(let i = 0; i < workCards.length; i++ ){
    workCards[i].addEventListener('click', function(){
      document.querySelector('#work').scrollIntoView({behavior: 'smooth',block: "start"});
      workCards[i].classList.toggle('active');
      document.body.classList.toggle('with-overlay');
    } );
  }

	//Event Delegation
	siteNav.addEventListener('click', scrollTo);
	// workCards.addEventListener('click', expandCard);

});


//Add preload class
//Animate main on load
//Add proper event delegation for cards
