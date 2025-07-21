<img alt="Node.js" src="https://img.shields.io/badge/Node.js-brightgreen" target="_blank"> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-brightgreen" target="_blank"> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-brightgreen" target="_blank"> <img alt="React" src="https://img.shields.io/badge/React-brightgreen" target="_blank">

---

### Overview

This repo is split in a backend application and a frontend application. The backend is an Express.js API that serves user data, while the frontend is a React.js application that consumes this API and displays the data in a user-friendly format.

The **users-api** is a directory that contains the backend application, and the **users-frontend** is a directory that contains the frontend application.

> ⚠️ **Note:** The **users-api** and **users-frontend** directories do not exist yet. You will create these directories as you follow the steps outlined in the module instructions below.

### Requirements

- **Node.js**: Ensure you have Node.js installed on your machine.
- **TypeScript**: The backend and frontend applications are built using TypeScript.
- **Express.js**: The backend uses Express.js to create a RESTful API.
- **React.js**: The frontend is built using React.js.

---

### Module 1 - create a backend API application

Attach to the GitHub Copilot Agent Mode the following files to run this command below:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/backend-application.instructions.md`
- `.github/instructions/backend-structure.instructions.md`

Now, use the prompt below to create the backend application:

```

Create a backend API application using Express.js and TypeScript. Use the @faker-js/faker library to generate mock data and ts-node-dev to run the app. Implement a route at /api/users that responds with a JSON array of 10 fake users. Each user should have the following fields: id, name, username, email, and role. Organize the project using TypeScript best practices, including type definitions and modular structure. Use CORS middleware to allow requests from http://localhost:3001.

```

---

### Module 2 - create a frontend application

Atthach to the GitHub Copilot Agent Mode the following files to run this command below:

Now, use the prompt below to create the backend application:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/frontend-application.instructions.md`

```

Create a React.js frontend application using TypeScript that runs on port 3001 and fetches user data from http://localhost:3000/api/users. Define a User interface that reflects the backend data structure, and organize the project with a modular folder structure, including separate directories for components and types. Ensure the application includes proper error handling and loading states to deliver a smooth and reliable user experience. Use beautiful and modern CSS for styling to create a clean, responsive, and modern UI.

```

---

#### Getting Help

🚨 **Note:** If you encounter any issues during the setup or development process, first review the instructions and ensure all required files are attached to the Copilot Agent Mode. If Copilot is not providing the expected results, try to clarify your request or provide additional context. For persistent problems, don't hesitate to reach out to the team for support.

---

### Module 3 - Custom Instructions

Reference: https://code.visualstudio.com/docs/copilot/copilot-customization

In order to show the first case of custom instructions working on, let's create a file named `.github/instructions/variable-names.instructions.md` in the root directory of this repository. This file will contain the custom instructions for **camelCase** variable names.

```markdown
---
applyTo: "*.ts"
---

# Variable Names Rules

Apply this rule to all TypeScript files in this repository:

- Make sure to use camelCase for variable names.
- Enforce to use camelCase for variable names when creating new variables, changing existing variables, or refactoring code.
```

Prompt this to the GitHub Copilot Ask Mode: `create a todo list into my server.ts`

Seeing the results and proving that the variable names are in **camelCase**, now let's change the file to use **snake_case** variable names, test the opposite case of the previous one.

**Custom Instructions on VS Code Settings**

In order to use there, you can simply add thise snippet:

```json
  "github.copilot.chat.commitMessageGeneration.instructions": [
    {
      "text": "Use always emoji for commit messages"
    }
  ]
```

**Custom Instructions for Copilot Instructions**

In order to use the **copilot-instructions.md**, the main instruction inside the **.github** folder, use the content inside the `copilot-instructions.template.md` file to create the `.github/copilot-instructions.md` file.

Explain how it works and that is possible to reference other md files there.

**Custom Prompts**

In order to use the custom prompts, use the content inside the `nodejs-version.template.md` file to create the `.github/prompts/nodejs-version.prompt.md` file.

Go to Copilot Agent Mode and use the prompt:

```

/nodejs-version

```

Explain how it works and how can be disable/enable the tools in line 3!

---

### Module 4 - Implementing Automated Test Coverage

After the backend and frontend applications being created, you can implement a comprehensive testing setup for the users-api backend application using Jest and Supertest.

Just use this prompt to the GitHub Copilot Agent Mode create the entire testing setup:

```

Create a comprehensive testing setup for the users-api backend application using Jest and Supertest. Implement the following:

1. Configure Jest with TypeScript support using ts-jest
2. Create test files for the existing API endpoints in the users-api
3. Write tests that verify:
   - The users endpoint returns the correct number of users
   - The returned users match the expected interface
   - Error handling works properly
   - HTTP status codes are correct

Include proper test organization with describe/it blocks and implement both unit tests and integration tests. Make sure the tests follow best practices like proper setup and teardown. Update the package.json with appropriate test scripts.

```

---

### Module 5 - Creating a Remote Repository and Pushing Code

Before implementing the CI/CD with GitHub Actions, create a GitHub repository.
Now open the terminal in this root directory and run the following command to add a remote repository: `git remote add 201-session https://github.com/user/repo-created.git`

List the remote repositories to ensure the remote repository is added correctly:

```bash
git remote -v
```

Before we push the code to the remote repository, let's use the **GitHub Copilot Commit Message Generate** resource. To do that, follow these steps:

👉🏼 Generate a new feature branch, name is as wanted, example: `git checkout -b FEA-1234`

👉🏼 Add all **files/folders** created from **users-api** and **users-frontend** directories to the stage changes using git.

👉🏼 Go to the Source Control tab in your IDE and click on the "Generate Commit Message with Copilot" button.

👉🏼 Right away, Copilot will generate a commit message for you.

Review the message and click on the "Commit" button 🎉

Push the code to the remote repository: `git push -u 201-session FEA-1234`

And that's it! You have successfully created a remote repository and pushed your code to it. Now, let's move on to the next module where we will implement GitHub Actions for CI/CD.

Now, go to the GitHub repository to see the feaure branch created and see how GitHub Copilot can help to effortlessly generate detailed pull request descriptions that enhance collaboration and clarity in your projects.

Show close to the **Description**, when creating the PR, to click on Copilot Icon, and "Generate Summary".

---

### Module 6 - Implementing GitHub Actions

Now, let's start from the basics, ask the GitHub Copilot Agent Mode:

```

How does GitHub Actions works?

```

If the response provides a good example, save it up into the `.github/workflows/ci-test.yml` file.

🚨 If the response is not quite good, use the template: **ci-test.template.yml**

Now, ask the GitHub Copilot Agent Mode to create a GitHub Actions workflow for the backend application:

```

Update the ci-test.yml file to reflect the backend app test

```

With that being created, push the code to the repository and check the Actions tab in your GitHub repository to see the workflow running.

---

### Module 7 - Implementing a new feature

Here we're going to implement a new feature that allows users to view detailed information about each user in the frontend application. This will involve the following changes.

```
Create a user profile details page for my user management application. The page should:

- Display when a user is clicked in the main users table
- Show detailed information about the selected user
- Have a clean, consistent design with the rest of the application
- Include a way to navigate back to the users list
- Be accessible via a route like `/users/:userId`

### Backend

Extend the Express backend API to add a new endpoint for fetching individual user details. I need:

- A new route at `/api/users/:userId` that returns detailed information for a specific user
- Additional user details beyond what's shown in the list (e.g., address, phone, company, bio)
- Proper error handling if a user ID doesn't exist
- TypeScript interfaces for the new data structures
- Unit tests for the new endpoint

### Frontend

Create a UserProfile React component that displays detailed user information. The component should:

- Use React Router to get the userId parameter from the URL
- Fetch user details from the API endpoint we created
- Show a loading state while data is being fetched
- Display an error message if the user doesn't exist
- Show the user's profile picture prominently
- Organize information in a visually appealing card layout
- Include TypeScript interfaces for props and state

### Navigation

Implement navigation between the users list and the new profile details page:

- Make each row in the users table clickable to navigate to the profile page
- Add a back button on the profile page to return to the users list
- Update the React Router configuration to support the new route
- Ensure the browser history works correctly (back/forward navigation)

```
