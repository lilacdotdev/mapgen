/* |----- Map Generation / P5JS -----| */
/* |                                 | */
/* |                                 | */
/* |                                 | */
/* |----- Map Generation / P5JS -----| */


function setup() {
    
    // 1080p map sizing for now
    // TODO: fix aspect ratio
    const map = createCanvas(1920,1080,canvas);
    background(200);
    noLoop();
}

function draw() {
    const z_coeff = 200;
    
    
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            const noiseValue = noise(x/z_coeff, y/z_coeff);
            set(x,y,c_terrain(noiseValue));
        }
    }
    updatePixels();
}


function c_terrain(noiseval) {
    if(noiseval < e_water_value.innerHTML/1.25) {
        return color(0,0,255);
    } else if(noiseval < e_water_value.innerHTML) {
        return color(55,55,255);
    } else if(noiseval < e_shore_value.innerHTML) {
        return color(235,224,224);
    } else if(noiseval < e_forest_value.innerHTML) {
        return color(0,100,0);
    } else if(noiseval < e_mountain_value.innerHTML) {
        return color(20,80,20);
    } else if(noiseval < e_ice_value.innerHTML) {
        return color(255,255,255);
    }
}