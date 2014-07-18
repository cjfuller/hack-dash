/**
 * @jsx React.DOM
 */

var React = require('react');

var BigQuery = React.createClass({

    getInitialState: function() {
        return {
            table: null
        };
    },

    componentDidMount: function() {
        $.ajax({
            dataType: 'jsonp',
            url: 'http://www.khanacademy.org/devadmin/bigquerycsv',
            data: {
                q: 'api_public.company_goals',
                // TODO(tony): remove this key if we're open-sourcing later.
                // This allows access to the api_public dataset
                key: '',
            },
            success: function(result) {
                console.log(result);
                this.setState({table: result});
            }.bind(this)
        });
    },

    render: function() {
        if (!this.state.table) {
            return <div>
                <LoadingMessage />
            </div>;
        }

        return (
            <div />
        );
    }
});

module.exports = BigQuery;