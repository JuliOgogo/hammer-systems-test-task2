import React, {Component} from 'react';
import {Button, Col, Drawer, Form, Input, Row} from 'antd';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Loading from "../../../components/shared-components/Loading";

export class EditProfile extends Component {

    state = {
        id: '1',
        name: 'Charlie Howard',
        username: 'Charlie',
        email: 'charlie.howard@themenate.com',
        phone: '12345',
    }

    componentDidMount() {
        this.setState({
            id: this.props.data.id,
            name: this.props.data.name,
            username: this.props.data.username,
            email: this.props.data.email,
            phone: this.props.data.phone,
        })
    }

    render() {

        const {data, visible, close} = this.props;
        console.log(this.props.data)

        const onFinish = values => {
            this.props.updateUser(this.state.id, values.name, values.username, values.email, values.phone)
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const {name, username, email, phone} = this.state;

        return (
            <Drawer
                width={600}
                placement="right"
                onClose={close}
                closable={false}
                visible={visible}
            >
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'username': username,
                                'email': email,
                                'phone': phone,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone"
                                            name="phone"
                                            rules={[{
                                                required: true,
                                                type: 'phone',
                                                message: 'Please enter a valid phone!'
                                            }]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit" disabled={this.props.isFetching}>
                                    Save Change
                                </Button>

                                {this.props.isFetching ? <Loading/> : null}

                            </Col>
                        </Row>
                    </Form>
                </div>
            </Drawer>
        )
    }
}

export default EditProfile
