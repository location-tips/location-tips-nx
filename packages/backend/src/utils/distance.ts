export function getScore(distance: number): number {
  if (distance === 0) {
    return 10;
  }
  // Use logarithm with base 2 (adjust base as needed)
  const logDistance = Math.log2(1 + distance);
  // Normalize score between 0 and 10
  const score = 10 * (1 - logDistance / Math.log2(Math.E + 1));
  return Math.max(score, 0); // Clamp the score to 0 (minimum)
}

export function getDistanceBetweenEmbeddings(
  embedding1: number[],
  embedding2: number[]
): number {
  return getScore(
    Math.sqrt(
      embedding1.reduce(
        (acc, val, i) => acc + Math.pow(val - embedding2[i], 2),
        0
      )
    )
  );
}

export function getRadiusFromBoundingBox(boundingBox) {
    const latOffset = boundingBox.north - boundingBox.south;
    const lonOffset = boundingBox.east - boundingBox.west;
  
    const latOffsetDeg = latOffset * (180 / Math.PI);
    const lonOffsetDeg = lonOffset * (180 / Math.PI);
  
    const radius = Math.max(latOffsetDeg, lonOffsetDeg) / 2;
  
    return radius;
  }
  