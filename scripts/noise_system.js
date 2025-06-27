/* |----- Noise / Operations -----| */
/* |                              | */
/* |  Noise Systems for octaves   | */
/* |                              | */
/* |----- Noise / Operations -----| */


/* |-------===| OBJECTS |===-------| */

// ---=== | Map Object | ===--- //

// Perlin
function perlin_noise() {
    const map = [];
    for (x = 0; x < width; x++) {
        map[x] = [];
        for (y = 0; y < height; y++) {
            let noise_value = noise(x/zoom_slider.value, y/zoom_slider.value)
            map[x][y] = noise_value*255;
        }
    }
    return map;
}

function r_map_bound() {
    const e_x_outer = 10;
    const e_x_inner = 400;
    const e_xo_dst = Math.abs(width/2 - e_x_outer);
    const e_xi_dst = Math.abs(width/2 - e_x_inner);

    const e_y_outer = 10;
    const e_y_inner = 200;
    const e_yo_dst = Math.abs(height/2 - e_y_outer);
    const e_yi_dst = Math.abs(height/2 - e_y_inner);

    const map = [];
    for (let x = 0; x < width; x++) {
        map[x] = [];
        for (let y = 0; y < height; y++) {
            if((x < e_x_outer || x > (width - e_x_outer)) || (y < e_y_outer || y > (height - e_y_outer))) {
                map[x][y] = 0;
            } 
            else if ((x < e_x_inner || x > (width - e_x_inner)) ^ (y < e_y_inner || y > (height - e_y_inner))) {
                let distance_x;
                let distance_y;
                if (x < e_x_inner || x > (width - e_x_inner)) {
                    distance_x = (Math.abs(width/2 - x) - e_xi_dst) / (e_xo_dst - e_xi_dst);
                }
                if (y < e_y_inner || y > (height - e_y_inner)) {
                    distance_y = (Math.abs(height/2 - y) - e_yi_dst) / (e_yo_dst - e_yi_dst);
                }
                
                const distance = distance_x??0 + distance_y??0;

                map[x][y] = (255 - (distance * 255));
            } 
            else if ((x < e_x_inner || x > (width - e_x_inner)) && (y < e_y_inner || y > (height - e_y_inner))) {
                const distance_x = (Math.abs(width/2 - x) - e_xi_dst) / (e_xo_dst - e_xi_dst);
                const distance_y = (Math.abs(height/2 - y) - e_yi_dst) / (e_yo_dst - e_yi_dst);
                const distance = distance_x + distance_y;
    
                map[x][y] = (255 - (distance * 255));
            } 
            else {
                map[x][y] = 255;
            }
        }
    }
    return map;
}