/**
 * Created by dquach on 6/23/17.
 */
$(function(){
    $(".element").typed({
        strings: ["Who is David Quach?^500", "A student?^500", "A programmer?^500", "A developer?^500", "Click to find out:"],
        typeSpeed: 0,
        backSpeed: 0,
        callback: function () {
            $(".typed-cursor").hide();
            $(".btn").show();
        }});

});
