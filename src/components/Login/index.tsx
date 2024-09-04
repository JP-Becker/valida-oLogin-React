import { Button, Col, Form, Input, Row } from "antd";
import React from "react";


export const Login = () => {
    return (
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={12}>
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={() => { }}
                >
                    <Form.Item label='Email' name='email'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                    <Input></Input>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}