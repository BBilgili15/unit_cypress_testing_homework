import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;

  let number1;
  let number2;
  let number3;
  let number4;
  let number5;
  let number6;
  let number7;
  let number8;
  let number9;
  let number0;
  let plusButton;
  let minusButton;
  let divideButton;
  let multiplyButton;
  let equalsButton;
  let clearButton;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator/>)
    number1 = container.getByTestId('number1');
    number2 = container.getByTestId('number2');
    number3 = container.getByTestId('number3');
    number4 = container.getByTestId('number4');
    number5 = container.getByTestId('number5');
    number6 = container.getByTestId('number6');
    number7 = container.getByTestId('number7');
    number8 = container.getByTestId('number8');
    number9 = container.getByTestId('number9');
    number0 = container.getByTestId('number0');
    plusButton = container.getByTestId('operator-add');
    minusButton = container.getByTestId('operator-subtract');
    divideButton = container.getByTestId('operator-divide');
    multiplyButton = container.getByTestId('operator-multiply');
    equalsButton = container.getByTestId('operator-equals');
    clearButton = container.getByTestId('clear')
    runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(number4);
    expect(runningTotal.textContent).toEqual('4');
  })

  
  it('should be able to add 1 to 4 and get 5', () => {
    fireEvent.click(number1)
    fireEvent.click(plusButton)
    fireEvent.click(number4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('5');
  })
  
  it('should be able to subtract 4 from 7 and get 3', () => {
    fireEvent.click(number7)
    fireEvent.click(minusButton)
    fireEvent.click(number4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3');
  })
  
  it('should be able to multiply 3 and 5 to get 15', () => {
    fireEvent.click(number3)
    fireEvent.click(multiplyButton)
    fireEvent.click(number5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15');
  })
  
  it('should be able to divide 21 by 7 to get 3', () => {
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divideButton)
    fireEvent.click(number7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3');
  })
  
  it('should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number7)
    expect(runningTotal.textContent).toEqual('217');
  })
  
  it('should be able to chain multiple operations together', () => {
    fireEvent.click(number2)
    fireEvent.click(plusButton)
    fireEvent.click(number9)
    fireEvent.click(minusButton)
    fireEvent.click(number7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to clear the running total without effecting the calculation', () => {
    fireEvent.click(number2)
    fireEvent.click(plusButton)
    fireEvent.click(number9)
    fireEvent.click(minusButton)
    fireEvent.click(number7)
    fireEvent.click(clearButton)
    expect(runningTotal.textContent).toEqual('0');
  })

})