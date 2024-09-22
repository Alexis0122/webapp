# WebApp CrowDevs

Web application for the CrowDevs project.

## Tech Stack

The application is built using the following technologies:

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mantine](http://mantine.dev/)
- [React Query](https://tanstack.com/query/latest)
- [React hook form](https://react-hook-form.com/)

## Project Structure

```bash
   .
├── src/
│   ├── api/                   # common hooks for making HTTP requests across components
│   ├── assets/                # images used in the project
│   └── features /
│   └── components /
│       ├── layouts
│       └── common             # shared components used throughout the application
│   ├── config/                # environment variable configuration files
│   ├── contexts/              # shared React contexts used across the app
│   ├── hooks/                 # shared hooks used throughout the application
│   ├── lib/                   # preconfigured library exports for the application
│   ├── pages/                 # Next.js pages
│   ├── testUtils/             # shared testUtils utility functions
│   ├── theme/                 # base theme and styles of the application
│   ├── types/                 # base types used across the application
│   └── utils/                 # shared utility functions
│
├── sonar-project.properties   # configuration file read by SonarQube for identifying project's coverage and excluding specific folders from testUtils
├── setupTests.js               # configuration that runs before every test
└── next.config.js              # Next.js configuration
```

In order to scale the application in the easiest and most maintainable way, most of the code is kept inside the
components folder as a separate Feature folder, each feature contain different feature-based things, i.e. specific code
for a given feature.

A feature could have the following structure:

```bash
features
└── {{Component}}
    ├── __mocks__/           # mocked version of the component that could be used by jest in a test (not used for this project)
    ├── api/                 # exported API request declarations and api hooks related to a specific feature
    ├── __tests__/
    │   ├── {{Component}}.test.tsx   # unit testUtils for component
    │   └── {{someIntegrationTest}}.test.tsx     # tests for interaction between different components
    ├── index.ts.ts             # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
    ├── {{Component}}.constants.ts        #  Constants used by components inside the component or feature
    ├── {{Component}}.types.ts            # typescript types for TS specific feature domain
    ├── {{Component}}.module.css          # CSS Module that contains styles of the component
    └── {{Component}}.utils.ts            # utility functions for a specific component or feature
```

## Getting Started

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.
- Install a prettier extension on your preferred IDE.

## Installation

1. Clone the repository:

   ```bash
   git clone git@ssh.dev.azure.com:v3/mdtx/Gestion%20Pagos%20-%20PAGAMEX/WebApp
   cd web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file with the variables inside `.env.example`.

4. Run the application in development mode:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000/](http://localhost:3000) with your browser to see the
   result.
6. In case you need to create a new feature that requires an integration with a backend, you can use a Mock. Refer to [Creating a Mock](#creating-a-mock) section.

## Building for production

To build the application for production, run the following command:

```bash
npm build
```

## Workflow Overview (Gitflow)

The following branches are used in the development process:

**Main Branch (main)**: Represents the stable, production-ready state of the application.

**SQA Branch (SQA)**: Integration branch where features are merged for functional testing before they are ready for
release.

**Development Branch (Develop)**: Features are merged for unit testing before they are ready for SQA. All feature
branches are merged into this branch.

**Feature Branches (feature/task-number)**: Each new feature should have its own branch created from develop. Once the
feature is complete, it's merged back into develop.

**Fix Branches (fix/bug-number)**: Each task associated to a particular bug should have its own branch created from
develop. Once the bug is solved, it's merged back into develop.

## Running Tests

Tests can be run using the following commands:

1. Run tests:
   ```bash
   npm run test
   ```
2. Run tests in watch mode:

   ```bash
   npm run test:watch
   ```

3. Run tests with synchronously (to avoid race conditions locally):
   ```bash
   npm test -- --runInBand
   ```

### Including coverage

1. Run tests with coverage

   ```bash
   npm run testUtils:coverage
   ```

2. Run tests with coverage synchronously (to avoid race conditions locally):
   ```bash
   npm run testUtils:coverage -- --runInBand
   ```

## Code Review Checklist

This guide serves as a checklist to ensure all aspects of the code have been reviewed before submitting a pull request. These points **will be checked during the code review**, so it is crucial to meet them to ensure the quality and consistency of the project.

### User Interface:

- [ ] Does the UI adapt well to different screen sizes?
- [ ] Is the layout responsive and mobile-friendly? (Mobile being 360px width min).
- [ ] Do the UI components match the design in all aspects (padding, margins, height, width, etc.)?
- [ ] Does the interface meet the functional requirements specified in the documentation and test cases?

### Code Formatting:

- Ensure code is consistently formatted according to project guidelines.
  - [ ] Is the code properly indented and spaced?
  - [ ] Have you removed any unnecessary white spaces?

### Error Handling (if needed):

- [ ] Are all possible exceptions handled appropriately?
- [ ] Are error messages, **shown to the user**, clear and informative? Are they written in SPANISH?

### Naming Conventions:

Are variables, methods, and classes named clearly and according to conventions:

- **Methods**
  - [ ] Is the name in Upper Camel Case?
  - [ ] Does it clearly indicate its function?
  - [ ] Does it start with a verb?

### Documentation:

- [ ] Are there comments for complex or non-obvious logic?
- [ ] Are there comments for every util, custom hook or component?

### Unit tests

- [ ] Does the new functionality have unit tests?
- [ ] Do the tests cover all the code?

### Using Mantine Styles:

- [ ] Am I defining components styles in one of these ways: [Style Props](https://mantine.dev/styles/style-props/), [CSS Modules ](https://mantine.dev/styles/styles-overview/#css-modules) or [style prop](https://mantine.dev/styles/styles-overview/#style-prop) (as a last resort).
- [ ] When adding colors or styles to an element, am I using the colors specified in the Mantine theme?

### Other

- [ ] Are all console.logs removed?