import React from 'react';




class AutoFocus extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setFocusInput = element => {
            this.textInput = element;
        }
        this.focusInput =()=>{
          if(this.textInput)  this.textInput.focus();
        }
    }

    componentDidMount(){
        this.focusInput();
    }
    render(){
        return <div>
        <input type="text" ref={this.setFocusInput}/>
        <input type="button" value={'click here'} onClick={this.focusInput}/>
        </div>
    }
}


const News = (props) =>{
    return(
        <AutoFocus />
    )
}
export default News;