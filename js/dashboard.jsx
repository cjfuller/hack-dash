/** @jsx React.DOM */

var React = require("react");

var GAWidget = require("./ga-widget.jsx");
var StoriesWidget = require("./stories-widget.jsx");

var Dashboard = React.createClass({
    render: function() {
        return <div>
            <GAWidget name="Analytics Ape" />
            <StoriesWidget />
        </div>;
    }
});

module.exports = Dashboard;
