import { render, screen, waitFor, fireEvent } from "@testing-library/svelte";
import { expect, test, vi, beforeAll } from "vitest";
import CoffeeCards from "../components/CoffeeCards.svelte";

vi.stubGlobal("fetch", vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        id: Math.random(),
        blend_name: "Morning Bliss",
        origin: "Ethiopia",
        variety: "Arabica",
        notes: "chocolate, citrus, floral",
        intensifier: "Rich",
      }),
  })
));

beforeAll(() => {
  Element.prototype.animate = vi.fn().mockImplementation(() => ({ finished: Promise.resolve() }));
  window.scrollTo = vi.fn();
});

test("renders coffee cards and loads new coffee on button click", async () => {
  render(CoffeeCards);

  expect(document.querySelector(".loader")).not.toBeNull();

  await waitFor(() => {
    expect(document.querySelector(".loader")).not.toBeNull();
  });

  await waitFor(() => {
    expect(screen.getByText("Morning Bliss")).not.toBeNull();
    expect(screen.getByText("Ethiopia")).not.toBeNull();
  });

  const loadButton = screen.getByRole("button", { name: /Load new card/i });
  expect(loadButton).not.toBeNull();

  await fireEvent.click(loadButton);

  await waitFor(() => {
    expect(document.querySelector(".loader")).not.toBeNull();
  });

  await waitFor(() => {
    const coffeeCards = screen.getAllByText("Morning Bliss");
    expect(coffeeCards.length).toBe(2);
  });
});
