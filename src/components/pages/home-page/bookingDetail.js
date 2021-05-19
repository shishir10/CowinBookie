import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingDetailSection ({}) {
    const [t] = useTranslation('common');
    return (
        <>
            <p>Booking Confirm Message</p>
        </>
    );
}