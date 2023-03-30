import { customTestingRender } from "../../utils/test-utils";
import Footer from "./Footer";

describe("Footer component", () => {
  test("Check that footer renders with correct background", () => {
    const { container } = customTestingRender(<Footer background={"grass"}></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("background-grass");
  });

  test("Check that footer renders with smaller modificator", () => {
    const { container } = customTestingRender(<Footer smaller={true}></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("footer--smaller");
  });
});
