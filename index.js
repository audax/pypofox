var ui = require("sdk/ui");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

exports.main = function() {

    var simplePrefs = require("sdk/simple-prefs"),
        prefs = simplePrefs.prefs;
    

    var action_button = ui.ActionButton({
        id: "pypo-button",
        label: "Pypo!",
        icon: "./pypo-icon.png",
        onClick: function(state) {
            tabs.open(prefs['url']+"/add/?url="+encodeURIComponent(tabs.activeTab.url));
        }
    });
};
