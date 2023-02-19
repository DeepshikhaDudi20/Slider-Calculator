import type {NextPage} from 'next'
import React from 'react'
import QuotePreviewForm from '../components/QuoteForm/QuotePreviewForm'
import {ViewContainer} from '@/components/layout/Main'

const HomePage: NextPage = () => {

    return (
        <>
            <title>Loan Repayment Calculator</title>
            <ViewContainer>
                <QuotePreviewForm/>
            </ViewContainer>
        </>
    );
}
export default HomePage