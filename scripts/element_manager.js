/* |------ Methods / Events ------| */
/* |                              | */
/* | Methods: random_gen(lower,   | */
/* |            upper), clamp()   | */
/* |                              | */
/* | Events: Seed, Water, Shores, | */
/* |         Forest, Mountains,   | */
/* |         Ice, Generate        | */
/* |                              | */
/* |------ Methods / Events ------| */


/* |-------===| METHODS |===-------| */
function random_gen(lower, upper) {
  return parseFloat(Math.random() * (upper - lower) + lower).toFixed(2);
}


/* |-------===| EVENTS | SLIDERS |===-------| */
// ---=== | WATER | ===--- //
water_slider.addEventListener("change", () => {
  water_display.innerHTML = water_slider.value + "%";
  redraw();
});

// ---=== | SHORES | ===--- //
shores_slider.addEventListener("change", () => {
  shores_display.innerHTML = shores_slider.value + "%";
  redraw();
});

// ---=== | MOUNTAINS | ===--- //
mountains_slider.addEventListener("change", () => {
  mountains_display.innerHTML = mountains_slider.value + "%";
  redraw();
});

// ---=== | BIOMES | ===--- //
biomes_slider.addEventListener("change", () => {
  biomes_display.innerHTML = biomes_slider.value + "%";
  redraw();
});

// ---=== | CLIMATE | ===--- //
climate_slider.addEventListener("change", () => {
  climate_display.innerHTML = climate_slider.value + "%";
  redraw();
});

// ---=== | X_OUTER | ===--- //
xo_slider.addEventListener("change", () => {
  xo_display.innerHTML = xo_slider.value + "%";
  redraw();
});

// ---=== | X_INNER | ===--- //
xi_slider.addEventListener("change", () => {
  xi_display.innerHTML = xi_slider.value + "%";
  redraw();
});

// ---=== | Y_OUTER | ===--- //
yo_slider.addEventListener("change", () => {
  yo_display.innerHTML = yo_slider.value + "%";
  redraw();
});

// ---=== | Y_INNER | ===--- //
yi_slider.addEventListener("change", () => {
  yi_display.innerHTML = yi_slider.value + "%";
  redraw();
});

// ---=== | ZOOM | ===--- //
zoom_slider.addEventListener("change", () => {
  zoom_display.innerHTML = zoom_slider.value;
  redraw();
});
/* |-------===| EVENTS | SLIDERS |===-------| */


/* |-------===| EVENTS | NUMERICAL |===-------| */
// ---=== | Seed | ===--- //
seed_numerical.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    seed_numerical.blur();
    noiseSeed(seed_numerical.value);
    redraw();
  }
});
seed_numerical.addEventListener("change", () => {
  noiseSeed(seed_numerical.value);
  redraw();
});

// ---=== | Octaves | ===--- //
octaves_numerical.addEventListener("keydown", (event) => {
  if(event.key == "Enter"){
    octaves_numerical.blur();
    redraw();
  }
});

// ---=== | Intensity | ===--- //
intensity_numerical.addEventListener("keydown", (event) => {
  if(event.key == "Enter"){
    intensity_numerical.blur();
    redraw();
  }
});

// ---=== | Falloff | ===--- //
falloff_numerical.addEventListener("keydown", (event) => {
  if(event.key == "Enter"){
    falloff_numerical.blur();
    redraw();
  }
});
/* |-------===| EVENTS | NUMERICAL |===-------| */


/* |-------===| EVENTS | SELECT |===-------| */
// ---=== | Boundary | ===--- //
boundary_select.addEventListener("change", () => {
  redraw();
});

// ---=== | Filter | ===--- //
filter_select.addEventListener("change", () => {
  redraw();
});
/* |-------===| EVENTS | SELECT |===-------| */


/* |-------===| EVENTS | BUTTONS |===-------| */
// ---=== | Generate | ===--- //
document.getElementById("generate_button").addEventListener("click", () => {
    redraw();
});
/* |-------===| EVENTS | BUTTONS |===-------| */