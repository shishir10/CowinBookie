import React, { useState,useEffect,useRef } from 'react';
import { Layout } from 'antd';
import { callAPI,callApiPost } from '../../../utils/axios-utils';
import { useTranslation } from 'react-i18next';

import FormSection from '../home-page/form';
import OTPSection from '../home-page/otp';
import BookingDetailSection from '../home-page/bookingDetail';

const { Footer, } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { xs : 24,sm:24,md:24,lg:{span: 8, offset: 8},xl: {span: 8, offset: 8}},
};

export default function HomePage() {
    const [t] = useTranslation('common');
    const [currentSection, setCurrentSection] = useState(0);

    function saveSelectionForm(values) {
        console.log(values);
        // OTP API call
        setCurrentSection(1);  
    }
    
    function saveOTPForm(values) {
        console.log(values);
        // OTP Confirm call
        setCurrentSection(2);  
    }

    return (
        <Layout className="mainContainer">
            {currentSection === 0 && 
                <FormSection 
                    tailLayout={tailLayout} 
                    layout={layout}
                    saveSelectionForm={saveSelectionForm}
                    />}
            {currentSection === 1 && 
                <OTPSection 
                    saveOTPForm={saveOTPForm}
                    tailLayout={tailLayout} 
                    layout={layout}/>}
            {currentSection === 2 && <BookingDetailSection/>}
            <Footer style={{ textAlign: 'center' }}>Cowin Bookie - 2021</Footer>
        </Layout>
    );
}