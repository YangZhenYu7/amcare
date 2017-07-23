/**
 * Created by yangzhenyu on 2017/7/23.
 */
/**
 * Created by yangzhenyu on 2017/7/21.
 */

import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Table,  Icon} from 'antd';
import {Patient, PatientLayer} from '../model/Patient';
const FormItem = Form.Item;


class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
            this.props.onSearch();
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    // To generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        const children = [];
        for (let i = 0; i < 3; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem {...formItemLayout} label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`)(
                            <Input placeholder=" " />
                        )}
                    </FormItem>
                </Col>
            );
        }
        return children;
    }

    render() {
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={40}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const columns = [{
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '药品分类',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '用药类型',
    dataIndex: 'type',
    key: 'type',
},  {
    title: '生产厂家',
    dataIndex: 'product',
    key: 'product',
},  {
    title: '来源',
    dataIndex: 'source',
    key: 'source',
}, {
    title: '创建时间',
    dataIndex: 'date',
    key: 'date',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
          <a href="#">编辑</a>
          <span className="ant-divider" />
          <a href="#">删除</a>
        </span>
    ),
}];



class PatientManage extends Component {
    constructor(spec){
        super(spec);
        this.opLayer = new PatientLayer;
    }

    state = {
        data:[]
    }

    search(){
        this.opLayer.getAllPatientsByState(1, (docs)=>{
            let newData=this.state.data;
            for (let prop in docs) {
                newData.push({key:prop, name:docs[prop].name});
            }
            this.setState({data:newData});
        });
    }

    render() {
        return(
            <div>
                <WrappedAdvancedSearchForm onSearch={this.search.bind(this)}/>
                <div className="search-result-list">
                    <Table columns={columns} dataSource={this.state.data} />
                </div>
            </div>
        );
    }
}
export default PatientManage;