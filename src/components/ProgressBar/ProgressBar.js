import "./ProgressBar.scss";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div data-testid="progress-bar__inner" className="progress-bar__inner" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
