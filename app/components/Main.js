var React = require('react');
var ReactDom = require('react-dom');

var Main  = React.createClass({
	render: function() {
		return (
			<div>
				Hello Worldies!
   		</div>
		)
	}
});

ReactDom.render(<Main />, document.getElementById('app'));
