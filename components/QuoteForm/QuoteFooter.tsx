import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { QuoteFormStats, QuoteFormStatFields, Value, Label, ButtonContainer, ButtonWrapper, Button } from '../layout/Footer'

interface QuoteFooterProps {
  interest: number;
  repayment: number;
}

const QuoteFooter: FC<QuoteFooterProps> = ({ interest, repayment }) => {

  const onBtnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <QuoteFormStats>
        <QuoteFormStatFields>
          <Value data-testid='interest-rate'>{interest}%</Value>
          <Label>Interest rate</Label>
        </QuoteFormStatFields>
        <QuoteFormStatFields>
          <Value data-testid='repayment-amount'>£{Math.round(repayment)}</Value>
          <Label>Monthly repayment</Label>
        </QuoteFormStatFields>
      </QuoteFormStats>
      <ButtonContainer>
        <ButtonWrapper>
          <Button data-testid="quote-btn" aria-label='Get your quote' onClick={onBtnClickHandler}>
            Get your quote
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
}

export default QuoteFooter;
