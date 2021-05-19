import React, { useState,useEffect } from 'react';
import { Row, Col, Form,Button } from 'antd';
import { Body,Input,Select } from '../../../components';
import { useTranslation } from 'react-i18next';

export default function OtpSection ({layout,tailLayout,saveOTPForm}) {
    const [t] = useTranslation('common');
    const [form] = Form.useForm();

    return (
        <Form form={form} {...layout} onFinish={saveOTPForm}>              
            <Row justify="space-around" align="middle">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Form.Item name="otp" label={'Confirm OTP'}>
                        <Input type="number" maxLength={6}/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" className='bookingBtn' onClick={() => form.submit()}>
                            {t('label.confirmOTP')}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form> 
    );
}