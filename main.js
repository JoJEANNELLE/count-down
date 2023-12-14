import "./style.scss";
import { setupCounter } from "./counter.js";

const FINAL_DATE = new Date("02-15-2024");
document.querySelector("#app").innerHTML = `
  <div class="counter">
    <div class="counter-unit counter-unit--days">
      <label>Days</label>
      <div class="counter-digits">
        <div class="counter-digit"></div>
        <div class="counter-digit"></div>
      </div>
    </div>
    <div class="counter-unit counter-unit--hours">
      <label>Hours</label>
      <div class="counter-digits">
        <div class="counter-digit"></div>
        <div class="counter-digit"></div>
      </div>
    </div>
    <div class="counter-unit counter-unit--minutes">
      <label>Minutes</label>
      <div class="counter-digits">
        <div class="counter-digit"></div>
        <div class="counter-digit"></div>
      </div>
    </div>
    <div class="counter-unit counter-unit--seconds">
      <label>Seconds</label>
      <div class="counter-digits">
        <div class="counter-digit"></div>
        <div class="counter-digit"></div>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector(".counter"), FINAL_DATE);
