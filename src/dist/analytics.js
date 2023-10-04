"use strict";
exports.__esModule = true;
var $ = require("jquery");
function createAnalytics() {
    var counter = 0;
    var Destroyed = false;
    var listener = function () { return counter++; };
    $(document).on('click', listener);
    return {
        destroy: function () {
            $(document).off('click', listener);
            Destroyed = true;
        },
        getClicks: function () {
            if (Destroyed) {
                return "Analytics is destroyed. Total clicks = " + counter;
            }
            return counter;
        }
    };
}
window['analytics'] = createAnalytics();
