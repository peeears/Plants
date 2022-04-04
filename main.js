$("#nameCheck").change(function () {
  $(".name").hide();
  if ($("#nameCheck").is(":checked")) {
    $(".name").show();
  }
});

$("#otherCheck").change(function () {
  $(".otherName").hide();
  if ($("#otherCheck").is(":checked")) {
    $(".otherName").show();
  }
});

$("#originalCheck").change(function () {
  $(".original").hide();
  if ($("#originalCheck").is(":checked")) {
    $(".original").show();
  }
});

$("#whereCheck").change(function () {
  $(".where").hide();
  if ($("#whereCheck").is(":checked")) {
    $(".where").show();
  }
});

$("#spritualCheck").change(function () {
  $(".spiritual").hide();
  if ($("#spritualCheck").is(":checked")) {
    $(".spiritual").show();
  }
});

$("#storyCheck").change(function () {
  $(".story").hide();
  if ($("#storyCheck").is(":checked")) {
    $(".story").show();
  }
});

$("#plantCheck").change(function () {
  $(".plantImage").hide();
  $(".plant").hide();
  if ($("#plantCheck").is(":checked")) {
    $(".plantImage").show();
    $(".plant").show();
  }
});
