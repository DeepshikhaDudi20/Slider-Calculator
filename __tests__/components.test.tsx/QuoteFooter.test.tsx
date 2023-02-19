/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuoteFooter from '../../components/QuoteForm/QuoteFooter';

expect.extend(toHaveNoViolations);

describe('The Quote Footer Component', () => {

  const loanDetails = {
    interest: '5',
    repayment: '80',
  }

  test('should render snapshots', () => {
    const tree = renderer.create(<QuoteFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render the loan details on page load', async () => {
    render(<QuoteFooter />);
    const quoteBtnElement = screen.queryByRole('button', { name: /Get your quote/i });
    expect(quoteBtnElement).toBeInTheDocument()
  })

  test("should render button to get quote", async () => {
    render(<QuoteFooter interest={loanDetails.interest} repayment={loanDetails.repayment} />);
    expect(screen.getByTestId('interest-rate').textContent).toEqual('5%')
    expect(screen.getByTestId('repayment-amount').textContent).toEqual('£80')
  });

  test("should not have any accessibility violations", async () => {
    const { container } = render(<QuoteFooter interest={loanDetails.interest} repayment={loanDetails.repayment} />);
    expect(await axe(container)).toHaveNoViolations();
  });

});