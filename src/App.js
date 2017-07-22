import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LayoutHeader from './layout/LayoutHeader';
import LayoutSider from './layout/LayoutSider';
import LayoutContent from './layout/LayoutContent';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
    constructor(spec){
        super(spec);
        this.categorySelected = '0';
    }

    render() {
        return (
            <div className="App">
                <Layout>
                    <LayoutHeader onClick={this.onHeaderClick.bind(this)}/>
                    <Layout style={{'flex-direction': 'row'}}>
                        <LayoutSider ref="sider" onClick={this.oSiderClick.bind(this)}/>
                        <LayoutContent ref="content"/>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>
                        许昌裴山庙社区服务站 ©2017 Created by yzy
                    </Footer>
                </Layout>
            </div>
        );
    }

    onHeaderClick(category) {
        this.categorySelected = category;
        this.refs.sider.updateState(category);
        this.updateContentUI(category, '0');
    }

    oSiderClick(e) {
        this.updateContentUI(this.categorySelected, e);
    }

    updateContentUI(category, type){
        this.refs.content.updateState({'category':category, 'type':type});
    }

}

export default App;
