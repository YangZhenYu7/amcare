/**
 * Created by yangzhenyu on 2017/7/31.
 */

import React, { Component } from 'react';
import {message, Form, Row, Col, Input, Button, Table,  Select} from 'antd';
import * as PatientM from '../../model/Patient';
import DiagnoseQueryTable from './view/DiagnoseQueryTable';
import { VictoryScatter } from 'victory';

class PatientDiagnoseHistory extends Component {
    constructor(spec) {
        super(spec);
        this.opLayer = new PatientM.PatientLayer;
    }

    onDelete(record) {
        this.opLayer.deletePatient(record, (err)=>{
            if (!err) {
                message.success('删除成功');
                this.search();
            } else {
                message.success('删除失败，请检查数据库');
            }
        });
    }

    onEdit(record) {
        this.opLayer.deletePatient(record, (err) => {
            if (!err) {
                message.success('删除成功');
            } else {
                message.success('删除失败，请检查数据库');
            }
        });
    }

    search(option){
        this.opLayer.getAllPatientsByState(1, (docs)=>{
            let stateData=[];
            for (let index in docs) {
                let item = docs[index];
                item['key'] = index;
                stateData.push(item);
            }
            this.refs.table.updateState(stateData);
        });
    }

    render() {
        return(
            <div>
                <VictoryScatter height={180} />
                <DiagnoseQueryTable ref='table' onSearch={this.search.bind(this)}
                                    onDelete={this.onDelete.bind(this)}
                                    onEdit={this.onEdit.bind(this)} />
            </div>
        );
    }
}

export default PatientDiagnoseHistory;