/* |----- Terrain / Colors -----| */
/* |                            | */
/* |                            | */
/* |                            | */
/* |----- Terrain / Colors -----| */


/* |-------===| OBJECTS |===-------| */

// ---=== | Terrain Objects | ===--- //
function Terrain(primary, secondary) {
    this.c_primary = primary;
    this.c_secondary = secondary;
}


/* |-------===| OBJECTS |===-------| */

// ---=== | Terrain Objects | ===--- //
const deep_ocean = new Terrain (
    color(75, 95, 155), // Primary Color : Dark Blue
    color(67, 67, 112)  // Secondary Color : Navy
);

const ocean = new Terrain (
    color(135, 176, 197), // Primary Color : Aqua
    color(100, 140, 180)  // Secondary Color : Blue
);

const shore = new Terrain (
    color(239, 230, 220), // Primary Color : Light Peach
    color(226, 217, 207)  // Secondary Color : Peach
);

const forest = new Terrain (
    color(112, 169, 112), // Primary Color : Desat Green
    color(58, 120, 79)  // Secondary Color : Dark Desat Green
);

const mountain = new Terrain (
    color(179, 191, 204), // Primary Color : Slate Gray
    color(152, 158, 179)  // Secondary Color : Dark Purple/Slate Gray
);

const ice = new Terrain(
    color(255, 255, 255), // Primary Color : White
    color(230, 230, 230)  // Secondary Color : Light Gray
);


/* |-------===| METHODS |===-------| */

// ---=== | Terrain_Selector | ===--- //
function Terrain_Selector(value) {

}