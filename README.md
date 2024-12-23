# Kanban Board

A simple, interactive Kanban board built with React. This project allows users to manage tasks through different stages such as "To Do", "In Progress", "Peer Review", and "Done". It utilizes drag-and-drop functionality for moving tasks between columns, and features task creation, search, and task filtering.

## Features

- **Drag and Drop**: Move tasks between columns (e.g., "To Do" to "In Progress") using drag-and-drop functionality powered by `react-dnd`.
- **Task Management**: Add new tasks with a title and description.
- **Search**: Search for tasks based on their title.
- **Responsive**: The board is responsive and adapts to different screen sizes.
- **Material UI**: Styled using Material UI components for modern and clean design.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React DnD**: A library for handling drag-and-drop interactions.
- **Material UI**: A popular React UI framework for building beautiful and consistent user interfaces.
- **HTML5 Drag and Drop API**: To handle the drag-and-drop functionality.

## Setup

To get started with this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/krish275890/kanban-board.git
    cd kanban-board
    ```

2. **Install dependencies**:
    Make sure you have `Node.js` and `npm` installed. Run the following command to install the required dependencies:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
    This will start the app in development mode. Open `http://localhost:3000` to view it in your browser.

## Features in Detail

### 1. Task Management
You can add new tasks to the board. Each task has a title and description. Once added, the task appears in the "To Do" column by default.

### 2. Drag-and-Drop
You can drag and drop tasks between different stages (columns) of the Kanban board. The stages include "To Do", "In Progress", "Peer Review", and "Done".

### 3. Task Search
There is a search bar at the top of the board that allows you to search for tasks by title. It dynamically filters the tasks displayed in the board.

### 4. Task Filtering
Tasks are filtered based on the selected stage, and only the tasks corresponding to the current column will be displayed.

## Project Structure

The project consists of the following key components:

- **KanbanBoard**: The main component that holds the Kanban board structure and state logic.
- **Column**: Represents each stage (e.g., "To Do", "In Progress", etc.) in the Kanban board.
- **Task**: Represents individual tasks that can be moved across columns.
- **SearchBar**: A search bar that filters tasks by title.

## Dependencies

- **react**: A JavaScript library for building user interfaces.
- **react-dnd**: A library to implement drag-and-drop features.
- **react-dnd-html5-backend**: The HTML5 backend for react-dnd.
- **@mui/material**: Material UI components for styling.
- **@mui/icons-material**: Material icons for additional UI components.

## License

This project is open source and available under the MIT License.


