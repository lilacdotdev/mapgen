/* |----- Terrain / Colors -----| */
/* |                            | */
/* |                            | */
/* |                            | */
/* |----- Terrain / Colors -----| */


/* |-------===| OBJECTS |===-------| */

// ---=== | Terrain Object | ===--- //
function Terrain(primary, secondary) {
    this.c_primary = primary;
    this.c_secondary = secondary;
}


// ---=== | Terrain Objects | ===--- //
// const deep_ocean = new Terrain (
//     color(75, 95, 155), // Primary Color : Dark Blue
//     color(67, 67, 112)  // Secondary Color : Navy
// );

// const ocean = new Terrain (
//     color(135, 176, 197), // Primary Color : Aqua
//     color(100, 140, 180)  // Secondary Color : Blue
// );

// const shore = new Terrain (
//     color(239, 230, 220), // Primary Color : Light Peach
//     color(226, 217, 207)  // Secondary Color : Peach
// );

// const forest = new Terrain (
//     color(112, 169, 112), // Primary Color : Desat Green
//     color(58, 120, 79)  // Secondary Color : Dark Desat Green
// );

// const mountain = new Terrain (
//     color(179, 191, 204), // Primary Color : Slate Gray
//     color(152, 158, 179)  // Secondary Color : Dark Purple/Slate Gray
// );

// const ice = new Terrain(
//     color(255, 255, 255), // Primary Color : White
//     color(230, 230, 230)  // Secondary Color : Light Gray
// );

const tropical = {}

const cells = [];


/* |-------===| METHODS |===-------| */
function generate_biomes(){
    const t_cells = voronoiGetCells();
    for(let i = 0; i < t_cells.length; i++){
	cells[i] = t_cells[i]; 
	cells[i].biome = 0;
    }
}


function get_biome(x,y){
    return 0
}

// ---=== | Terrain_Selector | ===--- //
function noise_to_terrain(value) {
    if(value < (((water_slider.value / 100) + 0.5) * 0.4) / 1.5) {
        return color(75, 95, 155);
    } else if(value < ((water_slider.value / 100) + 0.5) * 0.4) {
        return color(100, 140, 180);
    } else if(value < (((water_slider.value / 100) + 0.5) * 0.4) + 0.01) {
        return color(0,0,0);
    } else if(value < (((water_slider.value / 100) + 0.5) * 0.4) + 0.02) {
        return color(239, 230, 220);
    } else if(value < 0.7) {
        return color(112, 169, 112);
    } else if(value < 0.8) {
        return color(179, 191, 204);
    } else if(value < 1.0) {
        return color(255, 255, 255);
    }
}
