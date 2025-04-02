import Header from "../component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


test("should header component is render or not", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    const logo = screen.getByText("LOGO");

    // Assertion
    expect(logo).toBeInTheDocument();

});
