import { test, expect } from "@playwright/test";

// Expect sidebar to contain a "Categories" heading on desktop
test("has categories heading", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Categories" })).toBeVisible();
});

// Expect error message to display when users search for unlisted ingredients
test("invalid word search", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("searchbox").fill("unlistedIngredientsSearch");
  await page.getByRole("searchbox").press("Enter");
  await expect(
    page.getByRole("heading", { name: "Sorry, we couldn't find any recipe" }),
  ).toBeVisible();
});
