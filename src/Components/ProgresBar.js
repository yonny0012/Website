
export const ProgresBar = () => {
  return (
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      {/* eslint-disable-next-line */}
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
    </div>
  );
}