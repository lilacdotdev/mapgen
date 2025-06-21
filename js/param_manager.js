// Values
const e_water_value = document.getElementById("water_value");
const e_ice_value = document.getElementById("ice_value");
const e_shore_value = document.getElementById("shore_value");
const e_mountain_value = document.getElementById("mountain_value");

// Sliders
const e_water_range = document.getElementById("water_range");
const e_ice_range = document.getElementById("ice_range");
const e_shore_range = document.getElementById("shore_range");
const e_mountain_range = document.getElementById("mountain_range");

// Button
const e_water_btn = document.getElementById("water_btn");
const e_ice_btn = document.getElementById("ice_btn");
const e_shore_btn = document.getElementById("shore_btn");
const e_mountain_btn = document.getElementById("mountain_btn");

const e_seed_btn = document.getElementById("seed_btn");
const e_seed_input = document.getElementById("seed_input");

// Slider value showcase
e_water_range.addEventListener("change", () => {
  e_water_value.innerHTML = e_water_range.value;
  redraw();
});
e_ice_range.addEventListener("change", () => {
  e_ice_value.innerHTML = e_ice_range.value;
  redraw();
});
e_shore_range.addEventListener("change", () => {
  e_shore_value.innerHTML = e_shore_range.value;
  redraw();
});
e_mountain_range.addEventListener("change", () => {
  e_mountain_value.innerHTML = e_mountain_range.value;
  redraw();
});

// Randomize Buttons
e_water_btn.addEventListener("click", () => {
  e_water_value.innerHTML = random_gen(1,100);
  e_water_range.value = e_water_value.innerHTML;
  redraw();
});
e_ice_btn.addEventListener("click", () => {
  e_ice_value.innerHTML = random_gen(1,100);
  e_ice_range.value = e_ice_value.innerHTML;
  redraw();
});
e_shore_btn.addEventListener("click", () => {
  e_shore_value.innerHTML = random_gen(1,100);
  e_shore_range.value = e_shore_value.innerHTML;
  redraw();
});
e_mountain_btn.addEventListener("click", () => {
  e_mountain_value.innerHTML = random_gen(1,100);
  e_mountain_range.value = e_mountain_value.innerHTML;
  redraw();
});
e_seed_btn.addEventListener("click", () => {
  e_seed_input.value = String(random_gen(0,99999999)).padStart(8, "0");
  redraw();
})

function random_gen(lower, upper) {
  return Math.floor(Math.random() * upper) + lower;
}