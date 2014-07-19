var _ = require("underscore");
var RCSS = require("rcss");
var colors = require("./ka-colors.js");
var styleVars = require("./style-vars.js");
var logoHeightPx = 250;

var imgHolderStyle = {
    marginTop: ((styleVars.baseComponentHeight() - logoHeightPx)/2) + "px",
    marginLeft: "40px",
    width: "auto",
    float: "left",
};

var locationWidgetStyle = {
};

var locationHolderStyle = {
    paddingLeft: "85px",
    paddingTop: "50px",
    float: "left",
};

var titleStyle = {
    fontSize: "3.4em",
    fontWeight: "bold",
};

var weatherContainer = {
    marginTop: "15px",
}

var weatherStyle = {
    fontFamily: "weathericons",
    fontSize: "3em",
}

var dateStyle = {
    fontSize: "1.5em",
}
var timeStyle = {
    fontSize: "3em",
}

var temperatureStyle = {
    fontSize: "3em",
}

module.exports = {
    imgHolder: RCSS.registerClass(imgHolderStyle),
    locationWidget: RCSS.registerClass(locationWidgetStyle),
    locationHolder: RCSS.registerClass(locationHolderStyle),
    title: RCSS.registerClass(titleStyle),
    date: RCSS.registerClass(dateStyle),
    weather: RCSS.registerClass(weatherStyle),
    weatherContainer: RCSS.registerClass(weatherContainer),
    temperature: RCSS.registerClass(temperatureStyle),
    time: RCSS.registerClass(timeStyle),
};