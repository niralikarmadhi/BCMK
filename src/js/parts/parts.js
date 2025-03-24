export class Parts {

    init() {
        this.LeftRightImg();
    }

    LeftRightImg() {
        $(document).ready(function () {
            // Get the first option's image and set it as the default
            var defaultImg = $(".what-we-offer-option").first().data("img");
            $("#offer-img").attr("src", defaultImg);
          
            // On hover, change image
            $(".what-we-offer-option").hover(
              function () {
                var newImg = $(this).data("img");
                $("#offer-img").attr("src", newImg);
              },
              function () {
                // Reset to the first option's image when mouse leaves
                $("#offer-img").attr("src", defaultImg);
              }
            );
          
            // Optional: Reset if mouse leaves the entire group
            $(".what-we-offer-group").mouseleave(function () {
              $("#offer-img").attr("src", defaultImg);
            });
          });
          
    }
}
