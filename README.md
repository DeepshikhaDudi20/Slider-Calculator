# LOAN REPAYMENT CALCULATOR

## About Project
The purpose of this project is to develop a loan repayment calculator that calculates an interest rate and monthly repayments based on amount and tenure.
This project is created using TypeScript, Redux toolkit, NextJs and Styled components.
The project has been developed using the TDD approach with React Testing Library, Jest, and used Cypress for e2e testing.

As this project is fairly simple, using Redux is not necessary from an architectural point of view. However, I have chosen to use Redux to showcase my understanding of the subject.

## Implemented the following
- Project has the following sections on Home Page:
  - Main Quote Preview Form
  - A slider for loan amount with a range between `1,000` and `20,000`
  - A slider for loan term with a range between `1 year` and `5 years` with a step of `6 months`
  - Footer section on the form to display interest rate and monthly repayment on change of amount or term
  - CTA Button for getting the quote
- React Testing Library and Jest used for Unit testing
- The project includes exception handling.

  **Interest rate ranges table:** (Interest rate is calculated based on amount borrowed)
  |  Amount borrowed   | Interest rate |
  | ------------------ | ------------- |
  | £1,000-5,000       |       5%      |
  | £5,000-10,000      |       10%     |
  | £10,000-15,000     |       15%     |
  | £15,000-20,000     |       20%     |

## Additional implementations
- Implemented toggle switch from
  - Amount slider to editable input field
  - Term slider to editable select field
- Created reusable Input and Select component
- Added client-side validations to have min and max value on the editable input amount field on focus out
- Dockerized to run the project locally independent of the system, also to install dependencies faster or to avoid any package version conflict (Node)
- Used Cypress for e2e testing


# Project Styling
- Used styled component library, also used package "babel-plugin-styled-components" to have dynamic class names.
- Stored all colors used across application in a common file named as colors.ts (make us step close to have robust structure & easy maintenance)

## Accessibility as per WCAG 2.1 - AA standards
- Checklist {https://www.w3.org/WAI/WCAG21/quickref/} : to confirm the project is meeting WCAG 2.1 - AA standards
- Made it screen readers compliant by providing appropriate roles and aria-\* attributes to elements
- Pressing the TAB or SHIFT + TAB keys to allow the user to navigate and interact with interactive elements on the
  page. (On the Quote preview form, sliders for amount, tenure, and load more users button elements are accessible. TAB moves to the
  next element, SHIFT + TAB moves to the previous element)
- Used Site-improve Accessibility Checker plugin to check styling and other Accessibility standards

## Unit Testing performed
- Automated testing coverage
  - Functionality of Quote Preview Form
  - Accessibility violations testing using jest-axe
- Manual testing coverage
  - Site-improve Accessibility Checker & Lighthouse
  - keyboard
  - VoiceOver

# Cypress Test Coverage
- Valid initial default values on page load
- Display editable fields on toggle-icon click
- Validate interest rate on amount change
- Validate if max amount value is updated if amount entered is above max value
- Validate if min amount value in case amount entered is below min value
- Validate monthly repayment based on amount and term selected

## Scope of Improvements
- Amount and Tenure field to have an editable icon with an option to edit
- Functionality for Get your Quote button click
- If component is scaled and does complex computation, component performance can be optimized using React Memo and useCallback (to avoid unnecessary re-render)
- Implementing ‘SKIP-TO-CONTENT’ on Home Page to help keyboard users and screen readers jump from the top of the
  page to the content without having to go through all the navigation links (best accessibility practice to follow)
- Import i18next library and store language in a text file to make it in multiple languages

## Execution
### Using Docker ( Prerequisite: Docker ) <to be updated>
- To build a docker image:
  -  docker build -t loan-repayment-calculator .
- To start an app container in detached mode:
  - docker run -dp 3000:3000 loan-repayment-calculator
- To stop the container:
  - docker ps
  - docker stop <the-container-id>

### OR

### Commands to execute in the terminal to run an app in local
- To install dependencies:
  - npm install
- To spin up the app:
  - npm run dev
- To run test cases:
  - npm run test
- To run e2e cypress test:
  - npx run cypress


### App link
Local :  http://localhost:3000/

### App screenshots
