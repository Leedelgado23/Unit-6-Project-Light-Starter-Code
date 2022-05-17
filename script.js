$(".firstImage").dblclick(function() {
    $(".firstImage").css("border", "2px solid green");
    $(".SecondImage").fadeOut(1500);
});

$(".SecondImage").click(function() {
    $(".SecondImage").css("border", "2px solid blue");
    $(".firstImage").slideUp(1400); 
    $(".playlist").text("WhyDontWe"); 
    $(".playlist").attr("href", "https://www.youtube.com/watch?v=lbWVqzkhMrw&list=PLu7ODzjxNSKlCLi5nzJJQcYzdgKUydjeG"); 
});