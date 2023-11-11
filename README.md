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

## Application Visuals
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/20922b8a-cc4d-4aed-a93f-3da98b7c04ea" width="300">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/6df0d71a-46d3-4e3c-b196-12a634409bec" width="300">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/4062b497-a651-4424-9a31-368a0170fb97" width="300">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/d0cb588a-5ace-401b-a65a-5bd9d8e03318" width="300">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/bbcab104-6261-467d-a208-d9bdc8864f4b" width="300">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/70977785-4e37-4fea-8522-40b3f7d9cf16" width="300">

## Responsive Design
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/71c72881-2caa-4468-a7a8-83c210f27600" width="150">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/9af8a3dd-6387-433b-95b1-7db464ad4673" width="150">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/b8a0cc59-e918-48a7-b6b3-86b1ee75f518" width="150">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/3baee1a6-3e53-4607-a5ef-53bb02cf99d2" width="150">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/354d59ec-df53-4e02-8009-7d7ccd6b7f14" width="150">
<img src="https://github.com/chingu-voyages/v46-tier2-team-17/assets/115991254/e764ae1f-f455-46e7-b2f9-bfa0c3709fcb" width="150">

## Dependencies
- React
- React-Dom
- React Icons
- React-Loader-Spinner
- React-Paginate
- Uniqid

## Dev Dependencies
- ESLint
- Playwright
- Prettier
- Vite

## Contribution Guide

Below are the steps to contribute to the project.

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

## Contributors


- [Oluwatobi Sofela](https://github.com/oluwatobiss) - Developer
- [Ovie Oddiri](https://github.com/Oviep) - Developer
- [Kara Guarraci](https://github.com/karaguarraci) - Developer
- [Archana Dharaneedharan](https://github.com/arch1510) - Product Owner
- [Warren Hawker](https://github.com/WarrenHawker) - Voyage Guide


