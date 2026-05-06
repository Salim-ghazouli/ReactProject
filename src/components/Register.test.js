import { render, screen } from "@testing-library/react";

import Register from "./Register";
import userEvent from "@testing-library/user-event";

// test 1 (القديم)
test("shows error for invalid email", async () => {
  render(<Register />);

  const input = screen.getByPlaceholderText(/enter email/i);
  const btn = screen.getByRole("button", { name: /register/i });

  await userEvent.type(input, "wrong-email");
  await userEvent.click(btn);

  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
});

// test 2 (الجديد 👇)
test("shows error if verification code is empty", async () => {
  render(<Register />);

  const input = screen.getByPlaceholderText(/enter email/i);
  const btn = screen.getByRole("button", { name: /register/i });

  await userEvent.type(input, "test@email.com");
  await userEvent.click(btn);

  const verifyBtn = await screen.findByRole("button", { name: /verify/i });
  await userEvent.click(verifyBtn);

  expect(
    screen.getByText(/enter verification code/i)
  ).toBeInTheDocument();
});