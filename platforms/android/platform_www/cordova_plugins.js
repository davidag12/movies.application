cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-ext.SQLitePlugin",
    "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-ext",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-ext": "0.10.6",
  "cordova-plugin-splashscreen": "4.1.0"
};
// BOTTOM OF METADATA
});