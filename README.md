# Pantry Picker

## Overview

This project required the development of a React-based front-end application that interfaces with a publicly accessible API. The app includes various components designed to assist individuals interested in experimenting with recipes and flavors, offering novel ways to explore and create dishes.

## Timeframe

6 weeks (October 2nd to Nov 12th 2023)

## Team Planning

The aim of the project was discussed during the Voyage kickoff meeting and documented as below:

- Meeting - Voyage Kickoff --> https://docs.google.com/document/d/1mBwKALAWLKYF2rXh0FSt9KNW0RJ9qK6wRiRhOZg-uus/edit

The tasks were created and assigned using Sprint methodology. Jira Software was used to organise the sprint tasks.

- Jira board - https://chingu11.atlassian.net/jira/software/projects/TAS/boards/1

The Pantry Picker application was designed using the Figma tool as below:

- https://www.figma.com/file/nSFnfEfLe8YKcbGnc6G1On/Untitled?type=whiteboard&node-id=0-1&t=OUFaRvyteVALtEC4-0

## Features

- Sliding welcome message on the home page.
- Search field allowing users to input single or multiple ingredients.
- Ability to filter recipes by factors such as difficulty level, cooking duration, and number of ingredients.
- Ability to filter categories such as Dairy Free, Vegan, Pescaterian, Low-carb, Gluten free, Vegetarian, Comfort food, Kid friendly.
- Default light text in the search field explaining the utility of the application.
- Scrollable list of recipe cards displayed based on search criteria (max 20 recipes per search).
- Recipe Page:
  - Name
  - Category
  - Difficulty tag
  - Servings tag
  - List of instructions
  - List of nutrition
  - List of ingredients
  - Link to the instruction video
- Error message displayed when an unlisted item is entered.
- A footer with a link to our team's GitHub repository.
- The application is mobile and tablet responsive.

## Quickstart

Below are the steps to get started locally.

### 1. Clone only the `development` branch

```bash
git clone -b development --single-branch https://github.com/chingu-voyages/v46-tier2-team-17.git
```

### 2. Navigate into the cloned repo

```bash
cd v46-tier2-team-17/
```

### 3. Create and switch to your working branch

```bash
git switch -c purpose/short-description
```

- `purpose` refers to any of the following:

  - `fix` - fix a problem/bug
  - `feature` - add new feature to the app
  - `refactor` - change the format or structure of code

- `short-description` gives a brief description of the branch’s purpose. For instance, `fix/correct-typo`.

### 4. Navigate into the Recipe project’s directory

```bash
cd recipe-app
```

### 5. Install the predefined dependencies

```bash
npm install
```

### 6. Run the app

```bash
npm run dev
```

### 7. Create and test changes

Create and test your contributions in your working branch.

### 8. Run the `format` script

```bash
npm run format
```

> **Note**
>
> You can also [integrate Prettier with your code editor](https://prettier.io/docs/en/editors) to auto-format your file “on save.”

### 9. Stage and commit your changes

```bash
git add . && git commit -m "Your commit message"
```

### 10. Branch out to your local `development` branch

```bash
git switch development
```

### 11. Pull recent updates from the `development` branch on GitHub

```bash
git pull
```

### 12. Branch out to your local working directory

```bash
git switch purpose/short-description
```

### 13. Pull recent updates from your local `development` branch

```bash
git pull
```

### 14. Push your changes to GitHub

```bash
git push origin HEAD
```

### 15. Create your PR on GitHub

Go to the project’s GitHub repository (this repo) and create a Pull Request **to the development branch**.
