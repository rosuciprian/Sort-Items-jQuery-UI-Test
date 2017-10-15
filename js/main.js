$("document").ready(function () {
    var maxCount = $("ul#all-items li").length;
    $(".max_count").text(maxCount);

    function calculeazaNumarul() {
        var allItems = $("ul#all-items li").length;
        $(".all-items__count").text(allItems);

        var selectedItems = $("ul#selected-items li").length;
        $(".selected-items__count").text(selectedItems);
    }

    function init() {
        calculeazaNumarul();
    }

    $("ul#all-items").on('click', "li", function () {
        var liClicked = $(this).children("span").html();
        var liFormatted = '<li class="list-group-item selected"><i class="icon ion-android-checkbox-outline"></i> <span>' + liClicked + '</span></li>';
        $(liFormatted).appendTo("ul#selected-items");
        $(this).closest("ul#all-items li").animate({bottom: '10px', opacity: 0.25}).fadeOut( "fast", "linear", function() {
            $(this).closest("ul#all-items li").remove();
            init();
        });

    });

    $("ul#selected-items").on("click", "li.selected", function () {
        var liClicked = $(this).children("span").html();
        var liFormatted = '<li class="list-group-item"><i class="icon ion-android-checkbox-outline-blank"></i> <span>' + liClicked + '</span></li>';
        $(liFormatted).appendTo("ul#all-items");
        $(this).closest("ul#selected-items li").animate({bottom: '10px', opacity: 0.25}).fadeOut( "fast", "linear", function() {
            $(this).closest("ul#selected-items li").remove();
            init();
        });
    });

});