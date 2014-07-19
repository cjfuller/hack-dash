var React = require("react");
var RCSS = require("rcss");
var moment = require("moment-timezone");

var colors = require("./style/ka-colors.js");
var WidgetContainer = require("./widget-container.jsx");

var styles = require("./style/home-style.js");


var TimeDateWidget = React.createClass({
    updateTimeMs: 1000,
    getInitialState: function() {
        return {date: moment().tz(this.props.tz)};
    },
    getDateInTZ: function() {
        this.setState({date: moment().tz(this.props.tz)});
    },
    render: function() {
        var date = this.state.date;
        return <div>
            <div className={styles.date.className}>
                {date.format("dddd MMMM DD, YYYY")}
            </div>
            <div className={styles.time.className}>
                {date.format("h:mm:ss A")}
            </div>
        </div>
    },
    componentDidMount: function() {
        this.interval = setInterval(this.getDateInTZ, this.updateTimeMs);
    },
});

var WeatherWidget = React.createClass({

    //dangerously setting weather font characters from a lookup table
    //TODO(colin): is this actually safe if this is happening client-side?
    weatherCharacterLookup: {
        sunny: "&#xf00d;",
        spacer: "&nbsp;&nbsp;"
    },

    render: function() {
        var weather = this.weatherCharacterLookup;
        return <div className={styles.weatherContainer.className}>
            <span className={styles.weather.className}
                 dangerouslySetInnerHTML={
                     {__html: (weather[this.props.weather] + weather.spacer)}
                 }/>
            <span className={styles.temperature.className}>
                {this.props.temp}
                <span dangerouslySetInnerHTML={{__html: "&deg;"}}/>
                {this.props.degreeType}
            </span>
        </div>
    }
});

var LocationWidget = React.createClass({
    render: function() {
        return <div className={styles.locationHolder.className}>
            <div className={styles.title.className}>Mountain View</div>
            <TimeDateWidget tz="America/Los_Angeles"/>
            <WeatherWidget temp="70" degreeType="F" weather='sunny'/>
        </div>
    },
});



var HomeWidget = React.createClass({
    render: function() {
        return <WidgetContainer sizeClass="doubleWide" color={colors.csDomainColor}>
            <div className={styles.imgHolder.className}>
                <img alt="KA logo"
                    src="/images/khan-logo-vertical-transparent.png"/>
            </div>
            <LocationWidget className={styles.locationWidget.className}/>
        </WidgetContainer>
    },
});

module.exports = HomeWidget;