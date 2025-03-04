
# Node-assignment-3

This is a Node.js project for a simple **User Management System** built using **Express.js** and **EJS** as the template engine. The system allows users to register, view, edit, and delete user data. The application uses the Model-View-Controller (MVC) architecture to manage routes, logic, and views efficiently.

## Set Up Guide for Node

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sudip200/node-assignment-3
   ```

2. **Install dependencies**:
   Navigate to the project directory and run:
   ```bash
   npm install
   ```

3. **Start the server**:
   Run the following command to start the server:
   ```bash
   npm start
   ```
   This will start the app on **localhost:3000**.

## Routes

- **`/`** - Home page, where users can submit a form to add their name.
- **`/add-user`** - Post form data to add the user to the system.
- **`/edit/:id`** - Edit form to modify user details and submit the updated data.
- **`/delete/:id`** - Delete a user from the system by their ID.

## File Structure

- **`server.js`** - Entry point of the application.
- **`routes/`** - Contains route definitions.
- **`controllers/`** - Contains logic for handling requests and interacting with data.
- **`views/`** - Contains templates (EJS) for rendering dynamic content.
- **`public/`** - Contains static files like CSS, images, etc.
- **`data/`** - Contains the data storage (in JSON format for simplicity).

## Why Choose EJS Over Pug

EJS (Embedded JavaScript) was chosen for this project over Pug for several reasons:

1. **Simplicity**: EJS is very similar to regular HTML and has a syntax that is easier for developers transitioning from plain HTML to a templating engine. It allows for more straightforward integration with existing HTML structures.
   
2. **HTML-like Syntax**: Unlike Pug, which uses indentation and a custom syntax that is quite different from HTML, EJS retains the typical structure of HTML, making it easier for developers familiar with HTML to quickly adapt and start working.

3. **Familiarity**: Since EJS looks very much like HTML, it is more intuitive for users to learn and debug. There are fewer concepts to learn compared to Pug's indentation-based syntax.

4. **Flexibility**: EJS allows for the inclusion of JavaScript directly within the templates (e.g., conditionals, loops), which makes it powerful when handling dynamic content.

### Example Comparison: EJS vs Pug

- **EJS Example**:
  ```html
  <h1>Welcome, <%= userName %>!</h1>
  ```

- **Pug Example**:
  ```pug
  h1 Welcome, #{userName}!
  ```

As you can see, EJS closely resembles traditional HTML, whereas Pug uses its own indentation-based syntax that might require additional learning for developers accustomed to HTML.

## Additional Notes

- **Form Validation**: Basic form validation is implemented in the application to ensure that user names contain only alphabetic characters.
- **Error Handling**: The application gracefully handles errors, such as when a user tries to submit a name that already exists in the system or provides invalid input.
- **Dynamic User Management**: The user data is stored in a JSON file, and changes made through the application (e.g., adding, editing, or deleting users) are reflected immediately in the stored data.

