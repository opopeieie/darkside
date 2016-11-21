import React from 'react'
import Util from '../apis/util'

export let TestEnhance = ComponsedComponent => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            randomId:0,
            testText:"Hello"
        }
    }


    componentDidMount(){
        console.log(this.state.testText+" Did Mount World!");

    }


    componentWillMount() {
        console.log("first change");
        this.tick();
    }


    componentWillUpdate(){
        console.log(this.state.testText+" Will Update World!")
    }


    componentDidUpdate(){
        console.log(this.state.testText+" Did Update World!")
    }



    tick(){
        this.setState({testText:"NiHao",randomId:Util.randomId(5)});
    }


    render(){
        return (
            <ComponsedComponent {...this.props} {...this.state}/>
        )
    }


};

