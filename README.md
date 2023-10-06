# voyage-tasks

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

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
