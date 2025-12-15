# Error Boundary Implementation

## Project Overview

This project demonstrates the implementation of a React **Error Boundary** using **TypeScript**.  
The Error Boundary is designed to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI instead of crashing the entire application.

This implementation follows React best practices and uses a class component as required.

---

## Objective

- Implement an `ErrorBoundary` class component in TypeScript
- Catch runtime JavaScript errors in child components
- Display a user-friendly fallback UI when an error occurs
- Allow users to retry rendering the component tree

---

## Implementation Details

The `ErrorBoundary` component:
- Extends `React.Component`
- Uses TypeScript interfaces for props and state
- Implements `getDerivedStateFromError` to update error state
- Implements `componentDidCatch` to log error details
- Renders a fallback UI when an error is detected

---

## File Structure

