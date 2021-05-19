import React, { useState,useEffect } from 'react';
import { Row, Col, Form,Button } from 'antd';
import { Body,Input,Select } from '../../../components';
import { callAPI,callApiGet } from '../../../utils/axios-utils';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const ageFilterOption = [{id : 1, value : '18+'},{ id : 2, value : '45+'}];

export default function FormSection({layout,saveSelectionForm,tailLayout}) {
    const [t] = useTranslation('common');
    const [form] = Form.useForm();
    const [ stateList, setStateList] = useState([]);
    const [ districtList, setDistrictList] = useState([]); 
    const [ vaccCenterList, setVaccCenterList] = useState([]);

    useEffect(() => {
        getStateList();
    },[]);

    async function getStateList () {
        await callAPI(callApiGet, 
            'admin/location/states',{},
            async res => {
                setStateList(res.states);
            },
            async err => {
                console.log(err);
            });
    }

    async function getDistrict (value) {
        await callAPI(callApiGet, 
            `admin/location/districts/${value}`,
            {},
            async res => {
                setDistrictList(res.districts);
            },
            async err => {
                console.log(err);
            });
        
    }

    async function getVaccinationCenter (value) {
        await callAPI(callApiGet, 
            `appointment/sessions/public/findByDistrict`,{'district_id' : value, 'date' : moment().format('DD-MM-YYYY')},
            async res => {
                const data = res.sessions.map(val => { 
                    return { 
                        'name' : `${val.name} - ${val.address}`, 
                        'center_id' : val.center_id 
                    };
                });
                setVaccCenterList(data);
            },
            async err => {
                console.log(err);
            });
    }

    return (
        <Form form={form} {...layout} onFinish={saveSelectionForm}>              
            <Row justify="space-around" align="middle">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Form.Item name="phNumber" label={'Phone Number'}>
                        <Input type="number" maxLength={10}/>
                    </Form.Item>
                    <Form.Item name="state" label={'State'}>
                        <Select
                            optionValKey={'state_id'}
                            optionLabelKey={'state_name'}
                            options={stateList}
                            onChange={getDistrict}
                        />
                    </Form.Item>
                    <Form.Item name="district" label={'District'}>
                        <Select
                            optionValKey={'district_id'}
                            optionLabelKey={'district_name'}
                            options={districtList}
                            onChange={getVaccinationCenter}
                        />
                    </Form.Item>
                    <Form.Item name="pincode" label={'Vaccination Center'}>
                        <Select
                            optionValKey={'center_id'}
                            optionLabelKey={'name'}
                            options={vaccCenterList}
                            mode={'multiple'}
                        />
                    </Form.Item>
                    <Form.Item name="age" label={'Age Preference'}>
                        <Select
                            optionValKey={'id'}
                            optionLabelKey={'value'}
                            options={ageFilterOption}
                        />
                    </Form.Item>
                    <Form.Item name="referenceId" label={'Beneficiary Reference Id'}>
                        <Input type="text"/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" className='bookingBtn' onClick={() => form.submit()}>
                            {t('label.startBooking')}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form> 
    );
}