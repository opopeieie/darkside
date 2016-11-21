import React from 'react'


class HeaderView extends React.Component{
    constructor(){
        super();
    }


    render(){
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item" >
                        <img className="logo" style={{marginRight:"17px"}} src={require('../css/image/someLogo.png')}/>
                            一个小站
                    </a>
                    <a href="#" className="item">主页</a>
                    <a href="#" className="item">just for laugh</a>
                    <a href="#" className="item">天气</a>
                    <a href="#" className="item">音乐</a>
                    <a href="#" className="item right">登录</a>
                    <a href="#" className="item">注册</a>
                </div>
            </div>
        )
    }
}


export default HeaderView;