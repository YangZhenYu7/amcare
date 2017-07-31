
/**
 * Created by yangzhenyu on 2017/7/20.
 */

import React, { Component } from 'react';
import {Row, Col} from 'antd';
import * as PatientM from '../../model/Patient'

class ReservaterCall extends Component {
    state={
        data:[]
    }

    constructor(spec) {
        super(spec);
        this.oplayer = new PatientM.PatientLayer();
    }

    componentDidMount() {
        this.oplayer.getAllPatientsByState(1, (res)=>{
            this.setState({'data':res});
        });
    }

    getDisplayColText() {
        let datas = this.state.data;
        let colViews=[];
        for (let index in datas) {
            let item = datas[index];
            let name = item[PatientM.PatientKeyName];
            let id = item[PatientM.PatientKeyIDTemp] | '1';
            let doctor= item[PatientM.PatientKeyDoctor];
            colViews.push(<Row><Col>{'请'+id+'号'+name+'到'+doctor+'医生处就诊'}</Col></Row>)
        }
        return colViews;
    }

    render() {
        return (
            <div type="flex" justify="space-around">
                {this.getDisplayColText()}
            </div>
        );
    }

}
export default ReservaterCall;