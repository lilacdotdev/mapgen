/* |----- Map Generation / P5JS -----| */
/* |                                 | */
/* |                                 | */
/* |                                 | */
/* |----- Map Generation / P5JS -----| */


function setup() {
    
    // 1080p map sizing for now
    // TODO: fix aspect ratio
    const map = createCanvas(1920,1080,canvas);
    noiseDetail(8);
    noLoop();
}

function draw() {
    loadPixels();
    
    const map_texture = perlin_noise();
    const map_boundary_box = r_map_bound();

    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            // set(x,y, map_boundary_box[x][y]);
            set(x, y, noise_to_terrain((map_texture[x][y] * map_boundary_box[x][y]) / (255*255)));
        } 
    }
    updatePixels();
}