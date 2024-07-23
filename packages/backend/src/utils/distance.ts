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
  return euclidianDistance(embedding1, embedding2);
}

export function euclidianDistance(
  vectorA: number[],
  vectorB: number[]
): number {
  return getScore(
    Math.sqrt(
      vectorA.reduce(
        (acc, val, i) => acc + Math.pow(val - vectorB[i], 2),
        0
      )
    )
  );
}

export function cosineDistance(vectorA: number[], vectorB: number[]): number {
  if (vectorA.length !== vectorB.length) {
    throw new Error("Vectors must be of the same length");
  }

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
    magnitudeA += vectorA[i] * vectorA[i];
    magnitudeB += vectorB[i] * vectorB[i];
  }

  if (magnitudeA === 0 || magnitudeB === 0) {
    throw new Error("Vectors must not be zero vectors");
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  const cosineSimilarity = dotProduct / (magnitudeA * magnitudeB);
  const cosineDistance = 1 - cosineSimilarity;

  return cosineDistance;
}

export function getRadiusFromBoundingBox(boundingBox) {
    const latOffset = boundingBox.north - boundingBox.south;
    const lonOffset = boundingBox.east - boundingBox.west;
  
    const latOffsetDeg = latOffset * (180 / Math.PI);
    const lonOffsetDeg = lonOffset * (180 / Math.PI);
  
    const radius = Math.max(latOffsetDeg, lonOffsetDeg) / 2;
  
    return radius;
  }
  