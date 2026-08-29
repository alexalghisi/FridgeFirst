import { PANTRY } from "@/lib/cook";
import { useFridgeStore } from "./fridgeStore";

test("adding tomato puts caprese on the table", () => {
  useFridgeStore.setState({ have: PANTRY });
  useFridgeStore.getState().toggle("tomato");
  expect(useFridgeStore.getState().have).toContain("tomato");
  useFridgeStore.getState().reset();
});
