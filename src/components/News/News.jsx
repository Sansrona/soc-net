import React, {useState,useEffect} from 'react';




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

const Counter = ()=>{
    let [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `You are ${count} times cool`
    })

    return  <div>
            <p>Counter is {count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    
}


const News = (props) =>{
    return(< >
        <AutoFocus />
        <Counter />
        </>
    )
}
export default News;