import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";

import CoffeeCard from "../components/CoffeeCard.svelte";

test("renders CoffeeCard with correct data", async () => {
  const coffee = {
    id: 1,
    blend_name: "Morning Bliss",
    origin: "Ethiopia",
    variety: "Arabica",
    notes: "chocolate, citrus, floral",
    intensifier: "Rich",
    imageUrl: "https://loremflickr.com/500/500/coffee_bean?random=1",
  };

  render(CoffeeCard, { props: { coffee } });

  expect(screen.getByText("Morning Bliss")).not.toBeNull();

  expect(screen.getByText("Ethiopia")).not.toBeNull();

  expect(screen.getByText("Arabica")).not.toBeNull();

  expect(screen.getByText("Rich")).not.toBeNull();

  const visibleImage = screen.getByRole("img", { hidden: true });
  expect(visibleImage.getAttribute("src")).toBe(coffee.imageUrl);
  expect(visibleImage.getAttribute("alt")).toBe("Morning Bliss");
  
});
