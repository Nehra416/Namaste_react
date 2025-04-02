import { render, screen } from "@testing-library/react";
import Contact from "../component/Contact"
import "@testing-library/jest-dom";

// to write test cases inside the describe is not neccessary we do this only for the grouping of the similar component test cases
describe("Contact component all test Cases", () => {

    // we can also write the `it` keyword instead of `test` keyword also
    test("should Contact component is render or not", () => {
        // this will render on the jsdom
        render(<Contact />);

        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    });

    test("should input fileds are load inside the Contact component", () => {
        render(<Contact />);

        // Querying
        const input = screen.getAllByRole("textbox");
        console.log(input.length);

        // Assertion
        expect(input.length).toBe(2);
    });

})
