# project Name

Dev Stack

# project Description

A React web app where developers can explore different technologies and build their own custom tech stack by adding/removing items from a personal "stack" list.

## Technologies Used
- React (with TypeScript)
- Tailwind CSS
- Vite
- React-Toastify

## Features
- Browse technologies in a responsive card grid, each showing category, difficulty, rating, and description
- Add technologies to a personal "Your Stack" panel, with duplicate prevention and toast notifications
- Remove individual technologies or clear the entire stack at once, with a live selected-count display

## React Questions

1. JSX is a syntax extension for JavaScript that lets write HTML-like code inside JS.


2. Props are read-only data passed down from a parent component, while state is internal data managed within a component that can change over time.


3. useState lets you add and manage local state in a component. I used it to store the technology list and keep track of items added to the stack.


4. useEffect handles side effects like fetching data when a component mounts. I used it to load the technology data from the JSON file right when the page loads.


5. Keys help React identify which items have changed, been added, or removed so it can efficiently update only those specific UI elements.


6. Conditional rendering means showing different UI elements based on a condition. I used it to render either the "Add to Stack" button or the disabled "Added to Stack" button based on whether the item is already selected.


7. A parent passes data to a child using props. A child sends data back by calling a callback function that the parent passed to it as a prop.