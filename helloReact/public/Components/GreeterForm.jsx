var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        name = this.refs.name.value;
        
        if(name.length>0){
            this.refs.name.value = '';
            this.props.onNewName(name);    
        }
    },
    render: function(){
       return(
           
            <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" />
                    <button>Set name</button>
                </form>
       )
   } 
});

module.exports = GreeterForm;