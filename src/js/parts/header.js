export class Header {
    init() {
        this.headerFixed();
        this.SubMenu();
    }

    headerFixed() {
        $(document).ready(function () {
            var prevScrollPos = $(window).scrollTop();

            $(window).scroll(function () {
                var sticky = $(".header-main"),
                    scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    sticky.addClass("header-fixed");
                    sticky.removeClass("header-fixed-os");
                } else {
                    sticky.removeClass("header-fixed");
                    sticky.addClass("header-fixed-os");
                }

                if (prevScrollPos > scroll || scroll === 0) {
                    $(".header-main").removeClass("hidden");
                } else {
                    $(".header-main").addClass("hidden");
                }

                prevScrollPos = scroll;
            });
        });
    }


    SubMenu() {
        $(document).ready(function () {
            $(".main-menu").each(function () {
                if ($(this).find(".sub-menu").length) {
                    $(this).addClass("has-submenu");
                }
            });

            $(".main-menu").hover(
                function () {
                    if ($(this).find(".sub-menu").length) {
                        $(this).addClass("active");
                        $(".header-main").addClass("has-header");
                        $("html").addClass("overflow-hidden");
                    }
                },
                function () {
                    $(this).removeClass("active");
                    $(".header-main").removeClass("has-header");
                    $("html").removeClass("overflow-hidden");
                }
            );
        });
    }
}