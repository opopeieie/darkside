import React from 'react'



class ViceHeaderView extends React.Component{
    constructor(){
        super();
    }


    render(){
        return (
            <div className="ui grid">
                <div className="four wide two wide large screen one wide widescreen column">副标题一</div>
                <div className="four wide two wide large screen one wide widescreen column">副标题二</div>
                <div className="four wide two wide large screen one wide widescreen column">副标题三</div>
                <div className="four wide two wide large screen one wide widescreen column">副标题四</div>
            </div>
        )
    }
}


export default ViceHeaderView;