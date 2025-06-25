/* |----- Methods / Events ------| */
/* |                             | */
/* | Methods: random_gen(lower,  | */
/* |                     upper)  | */
/* |                             | */
/* | Events: Seed, Water, Shores,| */
/* |         Forest, Mountains,  | */
/* |         Ice                 | */
/* |                             | */
/* |----- Methods / Events ------| */


/* |-------===| METHODS |===-------| */
function random_gen(lower, upper) {
  return parseFloat(Math.random() * (upper - lower) + lower).toFixed(2);
}

function clamp() {
    e_shore_range.min = parseFloat(e_water_value.innerHTML) + 0.01;
    e_forest_range.min = parseFloat(e_shore_value.innerHTML) + 0.01;
    e_mountain_range.min = parseFloat(e_forest_value.innerHTML) + 0.01;
    e_ice_range.min = parseFloat(e_mountain_value.innerHTML) + 0.01;
}


/* |-------===| EVENTS |===-------| */

// ---=== | Seed | ===--- //
e_seed_btn.addEventListener("click", () => {
  e_seed_input.value = parseFloat(String(random_gen(0,99999999)).padStart(8, "0")).toFixed(0);
  noiseSeed(e_seed_input.value);
  clamp();
  redraw();
});

// ---=== | WATER | ===--- //
e_water_range.addEventListener("change", () => {
  e_water_value.innerHTML = e_water_range.value;
  clamp();
  redraw();
});
e_water_btn.addEventListener("click", () => {
  clamp();
  e_water_value.innerHTML = random_gen(e_water_range.min,0.8);
  e_water_range.value = e_water_value.innerHTML;
  redraw();
});

// ---=== | SHORES | ===--- //
e_shore_range.addEventListener("change", () => {
  e_shore_value.innerHTML = e_shore_range.value;
  clamp();
  redraw();
});
e_shore_btn.addEventListener("click", () => {
  clamp();
  e_shore_value.innerHTML = random_gen(e_shore_range.min,1.0);
  e_shore_range.value = e_shore_value.innerHTML;
  redraw();
});

// ---=== | FORESTS | ===--- //
e_forest_range.addEventListener("change", () => {
  e_forest_value.innerHTML = e_forest_range.value;
  clamp();
  redraw();
});
e_forest_btn.addEventListener("click", () => {
  clamp();
  e_forest_value.innerHTML = random_gen(e_forest_range.min,1.0);
  e_forest_range.value = e_mountain_value.innerHTML;
  redraw();
});

// ---=== | MOUNTAINS | ===--- //
e_mountain_range.addEventListener("change", () => {
  e_mountain_value.innerHTML = e_mountain_range.value;
  clamp();
  redraw();
});
e_mountain_btn.addEventListener("click", () => {
  clamp();
  e_mountain_value.innerHTML = random_gen(e_mountain_range.min,1.0);
  e_mountain_range.value = e_mountain_value.innerHTML;
  redraw();
});

// ---=== | ICY PEAKS | ===--- //
e_ice_range.addEventListener("change", () => {
  e_ice_value.innerHTML = e_ice_range.value;
  clamp();
  redraw();
});
e_ice_btn.addEventListener("click", () => {
  clamp();
  e_ice_value.innerHTML = random_gen(e_ice_range.min,1.0);
  e_ice_range.value = e_ice_value.innerHTML;
  redraw();
});

// ---=== | GENERATE BUTTON | ===--- //
document.getElementById("generate_btn").addEventListener("click", () => {
    redraw();
});