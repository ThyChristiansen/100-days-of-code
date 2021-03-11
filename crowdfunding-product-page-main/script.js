var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var bookmarkButton = $("#button-background");
var slider = $("#slider");
var selectRewardBtn = $("#select-reward");
var radioChecked = $(".form-check-input");
var valueChecked = $('input:radio[name="flexRadioDefault"]');


selectRewardBtn.on("click", function (event) {
  console.log("sdf");
  document
    .getElementById("select-reward")
    .setAttribute("data-bs-toggle", "modal");
  document
    .getElementById("select-reward")
    .setAttribute("data-bs-target", "#staticBackdrop");
});

bookmarkButton.on("click", function (event) {
  // console.log(slider.classList)

  if (!slider.hasClass("bookmarked")) {
    slider.addClass("bookmarked");
    console.log("bookmarked");
    document
      .getElementById("button-background")
      .setAttribute("data-toggle", "modal");
    document
      .getElementById("button-background")
      .setAttribute("data-target", "#myModal");
    $("#locker").html(
      '<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="white" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>'
    );
  } else {
    slider.removeClass("bookmarked");
    document
      .getElementById("button-background")
      .removeAttribute("data-toggle", "modal");
    document
      .getElementById("button-background")
      .removeAttribute("data-target", "#myModal");
    $("#locker").html(
      '<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>'
    );

    console.log("bookmark");
  }
});


valueChecked.change(function () {
	
	$("#flexRadioDefault1").parent().parent().removeClass("radio-checked");
	$("#flexRadioDefault2").parent().parent().removeClass("radio-checked");
	$("#flexRadioDefault3").parent().parent().removeClass("radio-checked");

	// $("#flexRadioDefault1").parent().remove(cardAction);
	// $("#flexRadioDefault2").parent().remove(cardAction);
	// $("#flexRadioDefault3").parent().remove(cardAction);
	$("#flexRadioDefault1").parent().parent().children(".pledge-group").removeClass("visible").addClass("hidden")
	$("#flexRadioDefault2").parent().parent().children(".pledge-group").removeClass("visible").addClass("hidden")
	$("#flexRadioDefault3").parent().parent().children(".pledge-group").removeClass("visible").addClass("hidden")


  if ($(this).is(":checked") && $(this).prop("id") === "flexRadioDefault1") {
    $("#flexRadioDefault1").parent().parent().addClass("radio-checked");
	$("#flexRadioDefault1").parent().parent().children(".pledge-group").removeClass("hidden").addClass("visible")
	
} if ($(this).is(":checked") && $(this).prop("id") === "flexRadioDefault2") {
    $("#flexRadioDefault2").parent().parent().addClass("radio-checked");
	$("#flexRadioDefault2").parent().parent().children(".pledge-group").removeClass("hidden").addClass("visible")


  } if ($(this).is(":checked") && $(this).prop("id") === "flexRadioDefault3") {
    $("#flexRadioDefault3").parent().parent().addClass("radio-checked");
	$("#flexRadioDefault3").parent().parent().children(".pledge-group").removeClass("hidden").addClass("visible")
	

  }
});

