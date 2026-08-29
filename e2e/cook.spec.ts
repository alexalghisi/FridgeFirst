import { expect, test } from "@playwright/test";

test("a tomato lights up caprese", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "FridgeFirst" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  await expect(page.getByTestId("recipe-caprese")).toHaveAttribute("data-ready", "no");
  await page.getByTestId("ing-tomato").click();
  await expect(page.getByTestId("recipe-caprese")).toHaveAttribute("data-ready", "yes");
});
