import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./services/server", () => ({
    makeServer: () => ({
      shutdown: jest.fn(),
    }),
  }));
  
  describe("App component", () => {
    it("renders the Home component by default", () => {
      render(<App />);
      const homeElement = screen.getByText("Nino Chakvetadze");
      expect(homeElement).toBeInTheDocument();
    });
  
    it("navigates to the 'Inner' page when the 'Inner' link is clicked", () => {
      render(<App />);
      const innerLink = screen.getByText("Nino Chakvetadze");
      fireEvent.click(innerLink);
      const innerElement = screen.getByText("Nino Chakvetadze");
      expect(innerElement).toBeInTheDocument();
    });
  });