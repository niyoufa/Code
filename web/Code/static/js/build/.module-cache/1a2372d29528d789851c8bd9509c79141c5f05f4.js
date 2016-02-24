// 注册组件

// 注册组件容器
var RegisterUnit = React.createClass({displayName: "RegisterUnit",
	// getInitialState : function() {
	// 	return {} ; 
	// } , 

	// componentDidMount : function() {
	// 	$.get(this.state.url,function(data){
	// 		this.setState({data: data});
	// 	}.bind(this),"json") ; 
	// } , 

	render : function() {
		return (
			React.createElement("div", {className: "registerUnit"}, 
				React.createElement(RegisterNav, null), 
				React.createElement(RegisterHead, null), 
				React.createElement(RegisterBody, null), 
				React.createElement(RegisterStatement, null)
			)
		) ; 
	}
}) ; 