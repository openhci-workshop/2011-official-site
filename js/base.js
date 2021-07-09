$(document).ready(function(){
	// Nav bar
	var navItemTarget = null;
	currentPath = window.location.pathname;
	if (currentPath.search("/about.html")!=-1)
		navItemTarget = $("#navAbout");
	else if (currentPath.search("/program.html")!=-1)
		navItemTarget = $("#navProgram");
	else if (currentPath.search("/introAndGoals.html")!=-1)
		navItemTarget = $("#navIntroAndGoals");
	else if (currentPath.search("/registration.html")!=-1)
		navItemTarget = $("#navRegistration");
    else if (currentPath.search("/passport.html")!=-1)
            navItemTarget = $("#navPassport");
    else if (currentPath.search("/final.html")!=-1)
            navItemTarget = $("#navFinal");
	else
		navItemTarget = $("#navMain");
	// console.log(navItemTarget);
	if (navItemTarget) navItemTarget.addClass("selected");
	$("#siteName").click(function(){
		window.location="./index.html";
	});
	
	// Add hover style
	$("footer, header, a.navItem, button").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});
	
	$("#browserHint").hide();
	if (navigator.userAgent.search("WebKit")==-1) {
		$("#browserHint").show();
	}
	
	$("table tr:odd").addClass("odd");
	$("table tr:even").addClass("even");
});
