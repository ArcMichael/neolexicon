# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup
---

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

This project serves as a comprehensive scaffolding tool designed to streamline the setup of new applications using the Tauri framework, coupled with engineering best practices. It provides a robust starting point for developers looking to build secure, high-performance desktop applications with web technologies. The scaffold includes pre-configured setups for Jest testing, TypeScript support, and essential development tools such as Vite for rapid development cycles and efficient bundling. This setup ensures that developers can focus on creating innovative applications while adhering to industry standards and optimizing for performance and maintainability right from the start.

## Push Local Code to Remote GitHub Repository

Follow these steps to push your local code to a remote GitHub repository:

1. **Create a New GitHub Repository**

   Go to [GitHub](https://github.com/) and create a new repository. Note down the repository URL (e.g., `https://github.com/username/new-repo.git`).

2. **Initialize Local Repository (If Not Already Initialized)**

   If your local project is not already a Git repository, open your terminal and navigate to your project directory, then run:

   ```bash
   git init
   ```

3. **Add Remote Repository**

    Add the new GitHub repository as a remote repository: 

    ```bash
    git remote add new-origin https://github.com/username/new-repo.git ✅
    ```

    Stage and Commit Your Changes

4. **Stage all your changes and commit them:**

    ```bash
    git add .
    git commit -m "Initial commit"
    ```

    Push to Remote Repository

5. **Push your local changes to the remote repository:**


    ```bash
    git push -u origin main
    ```

   If your default branch is not main, replace main with your branch name (e.g., master).
   
6. **Be cautious with this step as it will overwrite the remote repository's history**:

    If you need to force push to the remote repository (overwriting its history), use the following command. 

    ```bash
    git push new-origin main -f 
    ```

    

7. **Verify the Push**

    Go to your GitHub repository in the browser and verify that your code has been successfully pushed.