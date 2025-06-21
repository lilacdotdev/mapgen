const canvas = document.getElementById("map");

document.getElementById("generate_btn").addEventListener("click", () => {
    redraw();
});

function setup() {
    

    const map = createCanvas(canvas.offsetWidth,canvas.offsetHeight,canvas);
    background(200);
    noLoop();
}

function draw() {
    console.log("Sample:",noise(0,0), noise(0,0) < e_water_value.innerHTML * 0.01)
    console.log("Deep Water <",e_water_value.innerHTML * 0.005);
    console.log("Shallow Water <",e_water_value.innerHTML * 0.007);
    console.log("Shore < ",e_shore_value.innerHTML * 0.01);
    console.log("Mountain < ",e_mountain_value.innerHTML * 0.018);
    console.log("Ice < ",e_ice_value.innerHTML * 0.019);
    const z_coeff = 200;
    
    noiseSeed(e_seed_input.value);
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            const noiseValue = noise(x/z_coeff, y/z_coeff);
            set(x,y,c_terrain(noiseValue));
        }
    }
    updatePixels();
}

function windowResized() {
  resizeCanvas(canvas.offsetWidth,canvas.offsetHeight);
}


//TODO: Create clamping between values to avoid any holes.
//TODO: Create variables for easy color filtering later.
function c_terrain(noiseval) {
    if(noiseval < e_water_value.innerHTML * 0.005) {
        return color(0,0,255);
    } else if(noiseval < e_water_value.innerHTML * 0.007) {
        return color(55,55,255);
    } else if(noiseval < e_shore_value.innerHTML * 0.01) {
        return color(235,224,224);
    } else if(noiseval < e_mountain_value.innerHTML * 0.018) {
        return color(0,100,0);
    } else if(noiseval < e_ice_value.innerHTML * 0.019) {
        return color(0,80,0);
    }
}