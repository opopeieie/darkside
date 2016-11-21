import Donut from '../components/Donut'
import Bar from '../components/Bar'
import React,{ Component, PropTypes } from 'react'
import Util from '../apis/util'
import BuildPageConfig from '../config/BuildPageConfig'


export default class ComponentFactory extends Component{
    constructor(){
        super();
    }

    componentDidMount() {
        
    }


    // static makeComponent(component){
    //     var type = component.info.componentType;
    //     var lookup = {
    //         "piechartdonut": Donut,
    //         "barstacked": Bar
    //     };
    //
    //     if (lookup.hasOwnProperty(type)) {
    //         return new lookup[type](component);
    //     }
    //
    //     throw "Component does not exist";
    // }
    //
    //
    // static makeComponents(components){
    //     var componentList = [];
    //     components.forEach(function(component){
    //         componentList.push(ComponentFactory.makeComponent(component))
    //     });
    //     return componentList;
    // }



    render() {
        const {config} = this.props;
        var build = new BuildPageConfig(config);
        var componentDataObjList = build.buildPage();
        return (
            <div>
                {componentDataObjList.map(function(cfg){
                    let grouping  = cfg.grouping;
                    return <div key={Util.randomId(6)} className={grouping}>
                        {cfg.dataObj.map(function(data){
                            let randomId = Util.randomId(6);
                            let type = data.info.componentType;
                            // var donutStyle = LibUtil.getStyle(type);
                            switch(type){
                                case "piechartdonut":
                                    return <Donut key={data.label+randomId} componentData={data}/>;
                                    break;
                                case "barstacked":
                                    return <Bar key={data.label+randomId} componentData={data}/>;
                                    break;
                                default:

                            }
                        })}
                    </div>
                })}
            </div>
        )
    }

}