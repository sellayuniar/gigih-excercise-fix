import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../index";

test("the search bar should appear", () => {
    render(<SearchBar />);

    const TextField = screen.queryByText(/text field/i);
    expect(TextField).toBeInTheDocument();
});