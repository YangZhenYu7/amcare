import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LayoutMain from './layout/LayoutMain';
import LoginEntry from './login/LoginEntry';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
    state = {
        entry: 1
    }

    login() {
        this.setState({entry:1});
    }

    render() {
        let renderNode = null;
        if (this.state.entry == 0) {
            renderNode = <LoginEntry login={this.login.bind(this)}/>;
        } else {
            renderNode =<LayoutMain/>;
        }
        return renderNode;
    }

}

export default App;
