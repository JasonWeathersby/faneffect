 //Main file for game logic
 window.onload = init;

  function init() {
 	$('.cardfan img').on('mouseover', function () {
    $('.cardfan img').not(this).addClass('fade');
});

	$('.cardfan img').on('mouseout', function() {
    $('.cardfan img').removeClass('fade');
});
/* 	document.getElementById("img1").onmouseover = function(){
 		document.getElementById("img1").className += "front";
 	}
//document.getElementById("MyElement").className =
//   document.getElementById("MyElement").className.replace
//      ( /(?:^|\s)MyClass(?!\S)/g , '' ) 	
 	
 	document.getElementById("img2").onclick = function(){
 		alert("clicked 2");
 	}
 */	
 }

