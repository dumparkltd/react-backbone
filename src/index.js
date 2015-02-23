var React = require('react')
var debug = require('debug')
var h = require('create-element')
var Dropown = require('react-dropdown')
var Backbone = require('backbone')
var _ = require('lodash')

var Select = require('react-select')



var Fake = React.createClass({

	render: function () {

		var options = [
		    { value: 'one', label: 'One' },
		    { value: 'two', label: 'Two' },
		    { value: 'four', label: 'four' },
		    { value: 'three', label: 'Three' }
		];

		return (
			<Select 
		    name="form-field-name"
		    options={options}
		    multi={true}
				onChange={this.changeValue}/>
		)
	},

	changeValue: function (val) {
		console.log('onChange', val)

	}
})



React.render(<Fake />, document.body)


