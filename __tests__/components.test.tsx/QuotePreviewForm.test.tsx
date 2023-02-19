/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/store'
import { axe, toHaveNoViolations } from 'jest-axe';
import { create, act } from "react-test-renderer";
import QuotePreviewForm from '../../components/QuoteForm/QuotePreviewForm';

expect.extend(toHaveNoViolations);

describe('The Quote Preview Form Component', () => {
  const component = <Provider store={store}>
    <QuotePreviewForm />
  </Provider>

  test('should render snapshots', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('should render loan amount and term based on initial state of store', () => {
    render(component);
    expect(screen.getByTestId('loan-amount').textContent).toEqual('£1000')
    expect(screen.getByTestId('loan-term').textContent).toEqual('1 Year')
  })

  test("should render updated loan amount when amount slider value is changed", () => {
    const component = create(<Provider store={store}><QuotePreviewForm /></Provider>);
    const instance = component.root;
    const amountSlider = instance.findByProps({ id: 'loan-amount-slider' });

    act(() => {
      amountSlider.props.onChangeHandler({ target: { value: 2000 } });
    });

    expect(amountSlider.props.defaultValue).toEqual(2000);

    const amountValueElement = instance.findByProps({ id: 'loan-amount-value' });
    // /Get your quote/i
    expect(amountValueElement.props.children[1]).toEqual(2000);
  });

  test("should render updated term when term slider value is changed", async () => {
    const instance = create(component).root;
    const termSlider = instance.findByProps({ id: 'loan-term-slider' });

    await act(() => {
      termSlider.props.onChangeHandler({ target: { value: 24 } });
    });

    expect(termSlider.props.defaultValue).toEqual(24);

    const termValueElement = instance.findByProps({ id: 'loan-term-value' });
    expect(termValueElement.props.children).toEqual('2 Years');
  });

  test("should render updated fractional term when term slider value is changed", () => {
    const instance = create(component).root;
    const termSlider = instance.findByProps({ id: 'loan-term-slider' });

    act(() => {
      termSlider.props.onChangeHandler({ target: { value: 18 } });
    });

    expect(termSlider.props.defaultValue).toEqual(18);

    const termValueElement = instance.findByProps({ id: 'loan-term-value' });
    expect(termValueElement.props.children).toEqual('1½ Years');
  });

  test("should render input elements on clicking toggle icon", async () => {
    render(component);
    expect(screen.queryByTestId('loan-amount-input')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loan-term-input')).not.toBeInTheDocument()

    const toggleIconElement = screen.getByTestId('toggle-icon');
    fireEvent.click(toggleIconElement)
    expect(screen.getByTestId('loan-amount-input')).toBeInTheDocument()
    expect(screen.getByTestId('loan-term-input')).toBeInTheDocument()
  });

  test("should not have any accessibility violations", async () => {
    const { container } = render(component);
    expect(await axe(container)).toHaveNoViolations();
  });
});

