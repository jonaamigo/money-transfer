# Client Solutions Front End Assignment: Make A Transaction

## Assignment Purpose

The purpose of this test is to show off your level of front-end development skills and to show off your knowledge of modern CSS frameworks and practices.

## Brief Description

For this assignment you need to develop a single page application according to the provided design with the functionality of transferring money and showing the past transactions in a historical transactions list.

## Functional Requirements

### Transfer Money

As a User I should be able to transfer money using the Transfer Money form.
As a User I should be able to choose one of my own accounts in the "From Account" field, manually fill in an account number in the "To Account" field and fill in the number of currency in the "Amount" field.

---

As a User I should be able to:

1. Choose one of my own accounts using "FROM ACCOUNT" dropdown field
2. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form.
3. Press "Submit" and preview the entered data.

Non functional requirements:

- The "AMOUNT" field should only allow numbers
- "Submit" button should be disabled in the form (mimicking the behavior that all fields need to be filled)

### Transaction History

As a User I should be able to view recent transactions in an ordered list.

---

As a User I should be able to:

1. View a list of my recent transactions.

Non functional requirements:

- The functionality described above doesn't have to be in working form, but the UI should be fully implemented

## Technology Restrictions

### Read Carefully!

- Design your application anyway you want, but focus on clean, reusable code. You code should be DRY, with a focus on frontend best practices.
- We are open to seeing applications written in any modern framework.
- You are free to use any CSS frameworks or libraries, but the final result needs to be directly useable in "index.html".
- Responsiveness is required in this assignment! It's up to you how to adjust the UI of the design or if you choose a mobile first approach.
- Create a "README.md" file that explains what you’ve done and to provide any motivations or decisions you've made. Use this to elaborate on your opinions!
- Make sure your delivered package contains an unminified and human readable version of your source code.
- Scaffolding tools, like yeoman or boilerplate templates, are not allowed!

## Helpful Information

- The design to be developed is provided as a PNG for quick reference in the "design" folder.
- Images and icons have been provided in the assets folder. Transaction images are provided as base64 images in the transaction JSON.
- The font for the UI Design can be found on Google fonts: https://fonts.google.com/specimen/Kanit
- There should be no need for a backend in this project.
