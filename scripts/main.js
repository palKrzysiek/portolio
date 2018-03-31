$(document).ready(function(){
	addHoverClass();
	removeHoverClass();
	checkWidth();
	checkScroll();
	scrollTo();
	if(window.innerWidth>900){
		runAnimations();
	};
	startRain();
});

// dodawanie hover do navi
function addHoverClass(){
	if( window.innerWidth>900 ){
		var tab = document.querySelectorAll(".menu a");
		for (var i=0; i < tab.length; i++) {
		tab[i].classList.add("hvr-grow-rotate");
		}
	}
};
function removeHoverClass(){
	if( window.innerWidth<900 ){
		var tab = document.querySelectorAll(".menu a");
		for (var i=0; i < tab.length; i++) {
		tab[i].classList.remove("hvr-grow-rotate");
		}
	}
};

function checkWidth(){
	window.addEventListener("resize", function () {
     addHoverClass();
	 removeHoverClass();
 });
};

// dodawanie active do navi
function checkScroll(){
	window.addEventListener("scroll", function(){
		navActive();
		changeColor();
	});
		}

function navActive()
		{
		var tab = document.querySelectorAll(".menu a");
			for (let i = 0; i < tab.length; i++){
				if(window.pageYOffset >= (i-0.3) * window.innerHeight && window.pageYOffset <= (i+0.7) * window.innerHeight){
				tab[i].classList.add("active");
				}else {
				tab[i].classList.remove("active");
				};
			}
	};

//zmiana koloru tła navi

function changeColor(){
	if(window.pageYOffset > 0 && window.innerWidth <900){
		$('.menu').removeClass('navi-background');
		$('header').addClass('navi-background');
	}
	else if(window.pageYOffset > 0 && window.innerWidth >= 900){
		$('header').removeClass('navi-background');
		$('.menu').addClass('navi-background');
	}
	else{
			$('header').removeClass('navi-background');
			$('.menu').removeClass('navi-background');
		};
	
	}


//scroll animacja


	
function scrollTo (){
	$('.menu a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length && window.innerWidth<900) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 300);
    } else if( target.length && window.innerWidth>=900) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - (0.08 * window.innerHeight)
        }, 300);
}})};



//animate.it


function runAnimations(){
	$('.about-me .container div').addClass("hidden animated").viewportChecker({
			classToAdd: ' visible zoomIn',
			classToRemove: 'hidden',
			offset: 200
		})
	$('.box .stars').addClass("hidden animated").viewportChecker({
			classToAdd: 'visible fadeIn',
			classToRemove: 'hidden',
			offset: 200
		})
	$('.cards .card').addClass("hidden animated").viewportChecker({
			classToAdd: 'visible fadeInUp',
			classToRemove: 'hidden',
			offset: 200
		})
		
	};


function startRain(){
	if(window.innerWidth>=900){
	$('.rain-container i').addClass('rain');}
	else {
		$('.rain-container i:nth-child(2n-1)').addClass('rain');
	}
}



