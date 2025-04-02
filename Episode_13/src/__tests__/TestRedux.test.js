import TestRedux from "../component/TestRedux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

test("should TestRedux component redux default value is print or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <TestRedux />
            </Provider>
        </BrowserRouter>
    );
});
