class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {clickText : true, 
				  boldCheckbox: eval(this.props.bold),
				  fontSize: Number(this.props.size),
				  fontColor: 'black'};
    }

    toggle() {
    	this.setState({clickText : !this.state.clickText});
    }

    handleInputChange(){
    	this.setState({boldCheckbox: !this.state.boldCheckbox});
    }

    handleDecreaseButton(){
    	if(this.state.fontSize-1 > Number(this.props.min)){
    		this.setState({fontSize: this.state.fontSize-1, 
						   fontColor: 'black'})
		} 
		else{
			this.setState({fontSize: Number(this.props.min), 
						   fontColor:'red'})
		}
    }

    handleIncreaseButton(){
    	if(this.state.fontSize+1 < Number(this.props.max)){
    		this.setState({fontSize: this.state.fontSize+1, 
						   fontColor: 'black'})
		} 
		else{
			this.setState({fontSize: Number(this.props.max), 
						   fontColor:'red'})
		}
    }

    handleSizeDblClick(){
    	this.setState({fontSize: Number(this.props.size), 
    				   fontColor:'black'})
    }
    

    render() {
	var bold = this.state.boldCheckbox ? 'bold' : 'normal';
	var fontSize = this.state.fontSize;
	var clickText = this.state.clickText;
	var fontColor = this.state.fontColor;
	return(
	       <div>
		       <input type="checkbox" 
	       			  id="boldCheckbox" 
	       			  hidden={clickText} 
	       			  onChange={this.handleInputChange.bind(this)} 
	       			  checked={this.state.boldCheckbox}/>
		       <button id="decreaseButton" 
		       		   hidden={clickText}
		       		   onClick={this.handleDecreaseButton.bind(this)}>
		       		   	-
       		   </button>
		       <span id="fontSizeSpan" 
		       		 hidden={clickText}
		       		 onDoubleClick={this.handleSizeDblClick.bind(this)}
		       		 style={{color:fontColor}}>
		       		 	{fontSize}
	   		   </span>
		       <button id="increaseButton" 
		       		   hidden={clickText}
		       		   onClick={this.handleIncreaseButton.bind(this)}>
		       		   	+
	   		   </button>
		       <span id="textSpan" 
	       		     style={{fontWeight:bold, 
	       		     		 fontSize:fontSize}} 
	       		     onClick={this.toggle.bind(this)}> 
	     			 	{this.props.text}
	       	   </span>
	       </div>
	);
    }
}


// someone else's submission:
// https://github.com/justasam/SD4x-Programming-for-the-Web-with-JavaScript-HOMEWORK/blob/master/FontChooser.js