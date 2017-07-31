/**
 * Created by yangzhenyu on 2017/7/31.
 */

import React, { Component } from 'react';
import {Button} from 'antd';

class DiagnoseTodayHeader extends Component {
    constructor(spec) {
        super(spec);

    }

    onClick(tag) {

    }

    render() {
        return(
            <div display="flex" justify="space-around">
                <Button type="dashed" size="large" onClick={this.onClick.bind(this,0)}>今日就诊人数</Button>
                <Button type="dashed" size="large" onClick={this.onClick.bind(this,1)}>今日诊断中人数</Button>
                <Button type="dashed" size="large" onClick={this.onClick.bind(this,2)}>今日待就诊人数</Button>
            </div>
        );
    }
}

export default DiagnoseTodayHeader;