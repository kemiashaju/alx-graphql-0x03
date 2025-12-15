Objective: Develop a simple component that intentionally throws an error to test the ErrorBoundary functionality.

Instructions:

Create a new file named ErrorProneComponent.tsx in the components directory.
Implement a functional component that throws an error when rendered:
const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error!');
};

export default ErrorProneComponent;

In any of your pages (e.g., pages/index.tsx), import and use the ErrorProneComponent within the ErrorBoundary to trigger the error:

import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.
Repo:

GitHub repository: alx-graphql-0x03
Directory: alx-rick-and-morty-app
File: README.md, components/ErrorProneComponent.tsx,