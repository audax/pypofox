// The main module of the pypo Add-on.

// Modules needed are `require`d, similar to CommonJS modules.
// In this case, creating a Widget that opens a new tab needs both the
// `widget` and the `tabs` modules.
var Widget = require("widget").Widget;
var tabs = require('tabs');
var self = require("sdk/self");

exports.main = function() {

    var simplePrefs = require("simple-prefs"),
        prefs = simplePrefs.prefs;
    

    // Widget documentation: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/widget.html

    new Widget({
        id: "pypo-widget-1",
        label: "Pypo Widget",
        contentURL: self.data.url("pypo-icon.png"),

        onClick: function(event) {
            tabs.open(prefs['url']+"/add/?url="+encodeURIComponent(tabs.activeTab.url));
        }
    });
};
