/**
 * @jsx React.DOM
 */

var React = require('react');
var WidgetContainer = require('./widget-container.jsx');

var kaColors = require("./style/ka-colors.js");

// TODO(tony): move this out into its own style file...
var styles = require("./style/team-style.js");

var Experiments = React.createClass({

    getInitialState: function() {
        return {
            experiments: [],
            idx: 0,
        };
    },

    displayRandomExperiment: function() {
        var nextIdx = Math.floor(Math.random() * this.state.experiments.length);
        this.setState({idx: nextIdx});
    },

    componentDidMount: function() {
        $.get('http://localhost:3000/recent_experiments',
            function(result) {
                this.setState({experiments: result});
                this.displayRandomExperiment();
                this.interval = setInterval(this.displayRandomExperiment, 10000);
            }.bind(this)
        );
    },

    componentWillUnmount: function() {
        if (typeof this.interval !== "undefined") {
            clearInterval(this.interval);
        }
    },

    render: function() {
        if (this.state.experiments.length == 0) {
            return <WidgetContainer>
                <LoadingMessage />
            </WidgetContainer>;
        }

        var exp = this.state.experiments[this.state.idx];
        return (<WidgetContainer>
            <div className={styles.container.className}>
                <h2>Current Experiments</h2>
                <h3>{exp.display_name}</h3>
                <h4>
                Owner: {exp.owner}
                </h4>
                <p>
                    {exp.description}
                </p>
            </div>
            </WidgetContainer>
        );
    }
});

module.exports = Experiments;
