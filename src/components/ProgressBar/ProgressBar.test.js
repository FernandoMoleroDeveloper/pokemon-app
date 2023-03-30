import { customTestingRender } from "../../utils/test-utils";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component", () => {
  test("render bar with correct width", () => {
    const { getByTestId } = customTestingRender(<ProgressBar value={50}></ProgressBar>);
    const progressBarInner = getByTestId("progress-bar__inner");
    expect(progressBarInner).toHaveStyle("width: 50%");
  });
});
