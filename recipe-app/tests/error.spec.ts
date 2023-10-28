import { test, expect } from "@playwright/test";

test("has categories heading", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Categories" })).toBeVisible();
});

test("invalid word search", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("searchbox").fill("invalidIngredient");
  await page.getByRole("searchbox").press("Enter");
  await expect(
    page.getByRole("heading", { name: "Sorry, we couldn't find any recipe" }),
  ).toBeVisible();
});
