# Healthcare-Website-Automated-With-Cypress
This Cypress automation project is designed to test the CURA Healthcare Service website. The primary goal is to automate repetitive testing tasks, ensuring the website's functionality, consistency, and user experience.

**Key Features**
------------------

**- Data-Driven Testing:** Inputs for test cases are extracted from an Excel file, providing flexibility and reducing manual data entry.

**- Excel to JSON Conversion:** Cypress converts the Excel data into a JSON format, making it suitable for consumption within the automation scripts.

**- Custom 'multiIt' Method:** This custom method enhances test case execution by allowing multiple test cases to be run in a batch within a single it block. This improves efficiency and organization of the test suite.

**- Page Object Model (POM):** The POM design pattern is implemented to separate the page elements and their interactions from the test logic, promoting code reusability and maintainability.

**After Downloading The Project**
------------------------------------
1. Install cypress by running the following command: **npm install cypress**

   Or, (preferred) **npm install cypress --save-dev**
   
   Or, **npx cypress install --force**

2. Open Test Runner by running the following command: **npx cypress open**

3. *Might prompt the following pop up (only first time) for the windows users, ignore/cancel/cross this prompt and you can proceed!

4. To install Mochawesome Report run the following command: **npm install --save-dev mochawesome**
   
   Or, **npm install --save-dev mocha**

