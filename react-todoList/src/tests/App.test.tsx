import { describe, expect, it, beforeEach, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import Tasks from "../components/Tasks";

describe("App tests", () => {
  let app: HTMLElement;

  beforeEach(() => {
    app = render(<App />).container;
  });

  it("should render the App", () => {
    expect(screen.getAllByText("View & Create Tasks")).toBeDefined();
  });

  it("should have text when user types", async () => {
    const user = userEvent.setup();
    const inputField = screen.getByPlaceholderText("Enter A Task");

    // console.log(inputField);

    await userEvent.click(inputField);

    const userTypedValue = "fake task";

    await user.type(inputField, userTypedValue);
    expect(inputField.value).toBe(userTypedValue);
  });

  it("creating task", async () => {
    const user = userEvent.setup();
    const inputField = screen.getByPlaceholderText("Enter A Task");
    const submitBtn = inputField.nextSibling;

    await userEvent.click(inputField);

    const userTypedValue = "fake task";

    await user.type(inputField, userTypedValue);
    expect(inputField.value).toBe(userTypedValue);

    await user.click(submitBtn);
    expect(inputField.value).toBe("");
    expect(screen.getByText(userTypedValue)).toBeDefined();
  });
});

describe("Task Tests", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Tasks
        tasks={[{ title: "test", completed: false }]}
        setTasks={() => {}}
      />
    );
  });

  it("should render the Tasks", () => {
    const taskTitle = screen.getByText("test");
    expect(taskTitle).toBeDefined();
  });
  it("onClick event fires correctly", async () => {
    const user = userEvent.setup();
    const handleClick = vitest.fn();

    const [addBtn, deleteBtn] = screen.getAllByRole("button");

    addBtn.addEventListener("click", handleClick);
    deleteBtn.addEventListener("click", handleClick);

    await user.click(addBtn);
    await user.click(deleteBtn);
    expect(handleClick).toHaveBeenCalled(2);
  });
});
