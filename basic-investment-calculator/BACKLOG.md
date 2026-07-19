# Basic Investment Calculator Backlog

## Inputs

- [ ] Add accessible labels and matching input IDs.
- [ ] Validate initial investment, monthly contribution, and years as non-negative numbers.
- [ ] Add clear placeholder examples and helpful input hints.
- [ ] Allow the annual return rate to be entered directly as well as adjusted with controls.

## Calculation logic

- [ ] Define and document the compounding assumptions used by the calculator.
- [ ] Calculate investment growth using the initial investment, monthly contribution, years, and annual return rate.
- [ ] Support monthly compounding for more accurate projections.
- [ ] Add unit tests for zero values, one-year scenarios, and typical investment scenarios.

## Result display

- [ ] Display the projected future value after a successful calculation.
- [ ] Show total contributions and total estimated growth alongside the final value.
- [ ] Format all money values as localized currency.
- [ ] Add an annual growth breakdown or chart.

## Error handling

- [ ] Show inline validation messages for missing or invalid inputs.
- [ ] Prevent calculations when any required value is invalid.
- [ ] Handle unusually large values without displaying `NaN` or `Infinity`.
- [ ] Announce validation and result updates accessibly for screen-reader users.

## Responsive styling

- [ ] Make the calculator comfortable to use on narrow mobile screens.
- [ ] Ensure form controls and buttons have touch-friendly sizes.
- [ ] Improve keyboard focus styles and contrast.
- [ ] Test the layout at mobile, tablet, and desktop widths.
