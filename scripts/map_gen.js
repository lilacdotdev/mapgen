/* |----- Map Generation / P5JS -----| */
/* |                                 | */
/* |                                 | */
/* |                                 | */
/* |----- Map Generation / P5JS -----| */

const n_points = 20
const spatialRadius = 7;
const colorThreshold = 200;

function setup() {
    createCanvas(1920,1080,canvas);
    noiseDetail(8);
    pixelDensity(1);

    // Voronoi
    voronoiRndSites(20,100);
    voronoi(width, height-200, false);
    generate_biomes();

    const map_texture = perlin_noise();
    const map_boundary_box = r_map_bound();

    // Buffer
    const bufferMap = createGraphics(width, height);
    bufferMap.loadPixels();

    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
	    let biome = get_biome(voronoiGetSite(x,y)) ??
		{ biome : { biome : "bounds", 
		    color1 : [255,255,255], 
		    color2 : [255,255,255],
		    color3 : [255,255,255]
		}
	    }; 
	  
	    let finalColor = generate_terrain((map_texture[x][y] * map_boundary_box[x][y]) / (255*255), biome);
	    const index = (x + y * width) * 4;
            bufferMap.pixels[index] = red(finalColor);
            bufferMap.pixels[index + 1] = green(finalColor);
            bufferMap.pixels[index + 2] = blue(finalColor);
            bufferMap.pixels[index + 3] = 255;
        }
    }
    bufferMap.updatePixels();

    bilateralFilter(bufferMap);
}

function bilateralFilter(sourceImage) {
  // Load the pixel data for fast reading (from the source) and writing (to the canvas)
  sourceImage.loadPixels();
  loadPixels(); // Loads the main canvas's pixel array

  const spatialSigma = spatialRadius / 2.0; // Controls spatial falloff

  // Loop over every pixel of the destination canvas
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      
      let totalRed = 0;
      let totalGreen = 0;
      let totalBlue = 0;
      let totalWeight = 0;

      // Get the color of the center pixel from the source image
      const centerIndex = (x + y * width) * 4;
      const centerR = sourceImage.pixels[centerIndex];
      const centerG = sourceImage.pixels[centerIndex + 1];
      const centerB = sourceImage.pixels[centerIndex + 2];

      // Loop through the neighborhood (the "kernel")
      for (let ny = -spatialRadius; ny <= spatialRadius; ny++) {
        for (let nx = -spatialRadius; nx <= spatialRadius; nx++) {
          
          const sampleX = x + nx;
          const sampleY = y + ny;

          if (sampleX >= 0 && sampleX < width && sampleY >= 0 && sampleY < height) {
            
            // 1. Calculate Spatial Weight
            const spatialDist = dist(0, 0, nx, ny);
            const spatialWeight = exp(-(spatialDist * spatialDist) / (2 * spatialSigma * spatialSigma));
            
            // Get neighbor pixel color
            const sampleIndex = (sampleX + sampleY * width) * 4;
            const sampleR = sourceImage.pixels[sampleIndex];
            const sampleG = sourceImage.pixels[sampleIndex + 1];
            const sampleB = sourceImage.pixels[sampleIndex + 2];

            // 2. Calculate Color Weight
            const colorDist = dist(centerR, centerG, centerB, sampleR, sampleG, sampleB);
            const colorWeight = exp(-(colorDist * colorDist) / (2 * colorThreshold * colorThreshold));

            // 3. Combine weights and accumulate
            const finalWeight = spatialWeight * colorWeight;
            
            totalRed += sampleR * finalWeight;
            totalGreen += sampleG * finalWeight;
            totalBlue += sampleB * finalWeight;
            totalWeight += finalWeight;
          }
        }
      }
      
      // Set the final, blurred pixel on the main canvas
      const finalIndex = (x + y * width) * 4;
      pixels[finalIndex]     = totalRed / totalWeight;
      pixels[finalIndex + 1] = totalGreen / totalWeight;
      pixels[finalIndex + 2] = totalBlue / totalWeight;
      pixels[finalIndex + 3] = 255; // Alpha
    }
  }

  updatePixels(); // Apply all the pixel changes to the canvas
}
