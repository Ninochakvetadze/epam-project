import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoBox from "../components/PhotoBox/PhotoBox";
import photoBoxData from "../components/PhotoBox/PhotoBoxData";

test("PhotoBox component renders correctly", () => {
  // Render the PhotoBox component with the imported photoBoxData
  const { getByText, getByAltText } = render(<PhotoBox />);

  // Get elements by text and alt text
  const userNameElement = screen.getByText(photoBoxData[0].userName);
  const descriptionElement = screen.getByText(photoBoxData[0].description);
  const userImageElement = screen.getByAltText("User");

  // Assert that the user's name, description, and image are rendered correctly
  expect(userNameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(userImageElement).toBeInTheDocument();
  expect(userImageElement).toHaveAttribute("src", photoBoxData[0].userImage);
});
