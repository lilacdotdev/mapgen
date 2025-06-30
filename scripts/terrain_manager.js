/* |----- Terrain / Colors -----| */
/* |                            | */
/* |                            | */
/* |                            | */
/* |----- Terrain / Colors -----| */


/* |-------===| OBJECTS |===-------| */

// ---=== | Terrain Object | ===--- //
function is_Id(item, id) {
    return item.voronoiID === id;
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

const tropical = [
    { biome: "Desert", color1: [239,230,220], color2: [226,217,207], color3: [153, 136, 102] } ,
    { biome: "Rocky Pines", color1: [179, 198, 159], color2: [89, 120, 58], color3: [205, 205, 152] } ,
    { biome: "Rainforest", color1: [206, 255, 153], color2: [230, 255, 204], color3:[237, 255, 179] } ,
    { biome: "Savannah", color1: [172, 115, 57], color2: [192, 140, 89], color3: [210, 182, 172] }
];

const temperate = [
    { biome: "Forest", color1: [112, 169, 112], color2: [58, 120, 79], color3: [237, 248, 237] } ,
    { biome: "Plains", color1: [148, 240, 117], color2: [191, 242, 140], color3: [230, 255, 153] } ,
    { biome: "Steppes", color1: [128, 115, 77], color2: [146, 201, 130], color3: [191, 217, 166] } ,
    { biome: "Plains", color1: [128, 115, 77], color2: [128, 115, 77], color3: [128, 115, 77] }
];

const arctic = [
    { biome: "Tundra", color1: [211, 222, 222], color2: [190, 243, 217], color3: [233, 251, 238] } ,
    { biome: "Taiga", color1: [204, 230, 255], color2: [255, 255, 204], color3: [153, 255, 153] } ,
    { biome: "Icy Peaks", color1: [182, 196, 201], color2: [92, 115, 138], color3: [82, 82, 122] } ,
    { biome: "Montane Forest", color1: [197, 201, 211], color2: [77, 128, 77], color3: [211, 222, 211] }
];

const cells = [];


/* |-------===| METHODS |===-------| */
function generate_biomes(){
    const n_cells = voronoiGetCells().length;
    const t_sites = voronoiGetSites();
    for(let i = 0; i < n_cells; i++){
	cells[i] = {};
	cells[i].cellSite = t_sites.find(s => s.voronoiId === i);
	if(cells[i].cellSite.y >= (width * 0.35) && cells[i].cellSite.y <= (width * 0.65)) {
	    cells[i].biome = tropical[parseInt(Math.random()*3)]; 
	} else if (cells[i].cellSite.y >= (width * 0.19) && cells[i].cellSite.y <= (width * 0.81)) { 
	    cells[i].biome = temperate[parseInt(Math.random()*3)]; 
	} else {
	    cells[i].biome = arctic[parseInt(Math.random()*3)];
	}
    }
	
}


function get_biome(voronoiID){
    return cells[voronoiID];
}

function generate_terrain(value, b){
    if(value < (((water_slider.value / 100) + 0.5) * 0.4) / 1.5) {
        return color(75, 95, 155);
    } else if(value < ((water_slider.value / 100) + 0.5) * 0.4) {
        return color(100, 140, 180);
    } else if(value < (((water_slider.value / 100) + 0.5) * 0.4) + 0.01) {
        return color(0,0,0);
    } else if(value < (((water_slider.value / 100) + 0.5) * 0.4) + 0.02) {
        return color(239, 230, 220);
    } else if(value < 0.6){
	return color(b.biome.color3[0], b.biome.color3[1], b.biome.color3[2]);
    } else if(value < 0.8) {
	return color(b.biome.color2[0], b.biome.color2[1], b.biome.color2[2]);
    } else if(value < 1.0) {
	return color(b.biome.color1[0], b.biome.color1[1], b.biome.color1[2]);
    }
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
