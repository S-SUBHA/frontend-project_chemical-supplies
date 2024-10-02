# Project Overview

### 1. Description:

This is a web-app for representation of Chemical Supplies in a tabular manner.

### 2. Objectives

The web-app's UI has a table that contains a list of chemicals with their details. It also has sort options (both ascending and descending) on each column, based on which user can sort the data accordingly. The toolbar at the top contains the functionalies to add new row, move selected rows up & down, delete selected rows, refresh the table and save the data to the local-storage.

### 3. Design Principles

- **Simplicity:**  
  Minimalistic UI design is what has been tried to acheive in order to ensure ease of use.

- **Maintainability:**  
  Code is written in a modular fashion that eases the working with the code and also increases the reusablity of the code.

### 4. Technology Stack

- **HTML:** Plain HTML is used to create the basic structure of the UI.
- **CSS:** CSS is used for styling and layout.
- **JavaScript:** Vanilla JavaScript is used to achieve user interactivity and other dynamic parts of the web-app;
- **Version Control:** Git and GitHub is used for version control.
- **Testing:** Only manual testing has been done.

### 5. Architecture

#### 5.1. Folder Structure

```txt
/root
  |
  |--> index.html, .gitignore, README.md
  |
  |--> /data
  |       |-> data.json
  |
  |--> /public
  |       |-> logo.svg
  |
  |--> /styles
  |       |-> style.css
  |
  |--> /src
          |
          |-> /features
          |       |-> index.js, ...
          |
          |-> /utils
          |       |-> index.js, ...
          |
          |-> script.js

```

#### 5.2. HTML Structure

- **Semantic HTML:**  
  Semantic elements has been used ( like `<header>`, `<nav>`, `<main>`, and `<footer>`) for better SEO and accessibility.

#### 5.3. JavaScript Structure

- **Modular Code:**

  - Encapsulated reuseable functionalities into functions and files.
  - IIFEs are used in order to prevent polluting the global scope.

- **Event Handling:**
  - Used `addEventListener` for flexible event attachment.

### 6. Code Design Choices

#### 6.1. HTML Choices

- **Accessibility:**
  - Semantic tags are used in order to ensure accessibility.

#### 6.2. CSS Choices

- **Responsive Design:**
  - Employed media-query to ensure responsiveness according to device width.
  - Flexible units (%ages, rem etc.) are used for the purpose of achieving better responsiveness and hence better user experience.

#### 6.3. JavaScript Choices

- **Data Handling:**

  - Used JSON format for storing data to keep it organized and easily accessible.
  - Implemented Fetch API for asynchronous data retrieval.

- **Error Handling:**

  - Incorporated basic error handling to avoid potential issues for situations like fetching data.

- **Code Quality:**
  - Consistent naming conventions and styles (camelCase for variables and functions) are followed.

### 7. User Interface Design

The user interface has been tried to be kept as simple and minimalistic as possible without any significant compromise in user experience.

### 8. Testing Strategy

- Manual testing is done across multiple browsers and devices in order to ensure functionalities and responsiveness.
- Utilized chrome developer tools for debugging and designing purpose.

### 9. Deployment

- The web-app is deplyoed using `github pages`.
- `github pages` handles the automated deplyoment of the web-app upon any update being pushed to the repo.

### 10: Feature Enhancements and Scopes for Improvement:

- Performance optimization can be done by minifing the source files.
- Further styling can be done to improve the responsiveness and overall user experience.

### 11: Credits:

- **Chatgpt:**  
  Chatgpt is used to generate the sample-data and to get an outline for the documentation.
- **Kevin Powell:**  
  Design philosophy of the table is inspired by the video titled as `How to create a responsive HTML table` from _Kevin Powell_'s youtube channel.
