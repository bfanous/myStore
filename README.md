# MyStore

Project related to Angular course with FWD & Udacity

## Author

Beshoy Fanous Kamal

## Please Note that BackEnd Performance is little slow So please Open console and wait till reponse is recived with true

## Also Please Login with this accoune

### Email : Beshoy@gmail.com

### Password: @ngular1

## Project Description

myStore is a small eCommerce website with basic functionality

- Front End with angular #Core of the course
- Basic authentication with Auth0
- Some Backend Functionality

## Projects Features

- FronEnd with Angular (The Core)
  - Navigation Bar (Home - Product List - My Cart - Profile)
    - Home:
      - Introduction Page with button to route for Shopping.
    - Product List:
      - Call BackEnd system to get all avaiable products with [server-side Paginiation]()
      - If [Product Name]() is [clicked]() then it Routes to Product Details Component.
      - If [Add To Cart]() is [clicked]() then it call to associate the product to the logged in uesr.
    - My Cart:
      - Call BackEnd system to get all associated products related to the logged in user.
      - Ability to [increase/decrease]() the count for every single product.
      - If count reaches [Zer0]() then the selected product will [disassociate]() from my Cart List.
      - Also the same If [Remove]() button is clicked.
      - [Empty Cart]() Button will disassociate all products, so the list will be empty (BackEnd & Frontend)
      - [Shop More]() Button to redirect to Product List Page again
      - Form for [Checkout]() so the user can proceed to payment
        - The Checkout Form has Validation for all related Fields (Name/Address/Phone)
      - May Cart Component has Two child components:
        `Success And Confirmation Message Component` (If form is submitted successfully)
        `Empty Template Component` (If My Cart List is Empty)
    - Profile:
      - Basic Info about Logged In User
  - Header/Footer
- BackEnd system to handle (Products data and users) [Published]
- Auth0 for Authentication

## Getting Started

- To run the project you need:
  - Clone the repo using
  ```
  git clone {cloneURL}
  ```
  - Install npm packages using
  ```
  'npm install' or 'npm install --force'
  ```
  - Run the Project and make sure that the port is 4200 for Auth0.
    Note: BackEnd and Auth0 already published so no other requirement to run them

### Dependencies

- myStore Project is using nodejs 14.15
- you need to use this account for login to be able to see all the website functions
  Email: is [beshoy@gmail.com] and Password: is [@ngular1]

  ### Note That This account is the only one used is Auth0 and Backend system

  ### So If any other accounts needed Please Contact me

- [Git-Hub URL](https://github.com/bfanous/myStore)
