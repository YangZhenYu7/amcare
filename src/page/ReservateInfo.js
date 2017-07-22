/**
 * Created by yangzhenyu on 2017/7/20.
 */
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Calendar, Card, Tabs } from 'antd';
import {Patient, PatientLayer} from '../model/Patient';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const TabPane = Tabs.TabPane;

class ClinicInfo1 extends Component {
    constructor(spec){
        super(spec);
        this.opLayer = new PatientLayer;
    }

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                let ob = new Patient;
                ob.name = values["userName"];
                this.opLayer.inserPatient(ob);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label='姓名'>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名'}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='生日'>
                    {getFieldDecorator('birthday', {
                        rules: [{ required: true, message: '请输入生日' }],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='手机号'>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号' }],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='性别'>
                    {getFieldDecorator('gerden', {
                        rules: [{ required: true }],
                    })( <Input />)}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">确认</Button>
                </FormItem>
            </Form>
        );
    }
}
const RegisterPatient = Form.create()(ClinicInfo1);



class ClinicInfo extends Component {
    onPanelChange(value) {

    }

    render() {
        return (
                <Row type="flex" justify="space-around">
                    <Col>
                        <Card title="新挂号患者" style={{ width: 300 }}>
                            <RegisterPatient/>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="挂号列表" style={{ width: 450 }}>
                            <div style={{ width: 400, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                                <Calendar fullscreen={false}  onPanelChange={this.onPanelChange.bind(this)}/>
                            </div>

                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<span><Icon type="frown" />待就诊</span>} key="1">
                                    <Row> <Col>小冉</Col></Row>
                                    <Row> <Col>小冉</Col></Row>
                                    <Row> <Col>小冉</Col></Row>
                                    <Row> <Col>小冉</Col></Row>

                                </TabPane>
                                <TabPane tab={<span><Icon type="frown-o" />确诊中</span>} key="2">
                                    <Row> <Col>小小冉</Col></Row>
                                </TabPane>
                                <TabPane tab={<span><Icon type="meh" />已确诊</span>} key="3">
                                    <Row> <Col>小大冉</Col></Row>
                                </TabPane>
                            </Tabs>

                        </Card>
                    </Col>
                </Row>
        );
    }

}
export default ClinicInfo;