import React, {Component} from 'react';
import {Button, Col, Drawer, Form, Input, message, Row} from 'antd';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Loading from "../../../components/shared-components/Loading";

export class EditProfile extends Component {

    state = {
        id: '1',
        name: 'Charlie Howard',
        email: 'charlie.howard@themenate.com',
    }

    componentDidMount() {
        this.setState({
            id: this.props.data.id,
            name: this.props.data.name,
            email: this.props.data.email,
        })
    }

    render() {

        const {data, visible, close} = this.props;
        console.log(this.props.data)

        const onFinish = values => {
            this.props.updateUserName(this.state.id, values.name)
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const {name, email} = this.state;

        return (
            <Drawer
                width={800}
                placement="right"
                onClose={close}
                closable={false}
                visible={visible}
            >

                {this.props.isFetching ? <Loading/> : null}

                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'email': email,
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
                                </Row>
                                <Button type="primary" htmlType="submit" disabled={this.props.isFetching}>
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Drawer>
        )
    }
}

export default EditProfile
