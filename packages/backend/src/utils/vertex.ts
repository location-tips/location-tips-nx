import * as aiplatform from '@google-cloud/aiplatform';

export async function getEmbeddings(text: string) {
  const project = 'location-tips-409908';
  // const model = 'text-multilingual-embedding-002';
  const model = 'text-embedding-004';

  const dimensionality = 768;
  const apiEndpoint = 'us-central1-aiplatform.googleapis.com';
  const { PredictionServiceClient } = aiplatform.v1;
  const { helpers } = aiplatform;
  const clientOptions = { apiEndpoint: apiEndpoint };
  const location = 'us-central1';
  const endpoint = `projects/${project}/locations/${location}/publishers/google/models/${model}`;

  const instances = [helpers.toValue({ content: text })];
  const parameters = helpers.toValue(
    dimensionality > 0 ? { outputDimensionality: Number(dimensionality) } : {},
  );

  const request = { endpoint, instances, parameters };
  const client = new PredictionServiceClient(clientOptions);

  const [response] = await client.predict(request);

  const predictions = response.predictions;
  const embeddings = predictions.map((p) => {
    const embeddingsProto = p.structValue.fields.embeddings;
    const valuesProto = embeddingsProto.structValue.fields.values;

    return valuesProto.listValue.values.map((v) => v.numberValue);
  });

  return embeddings;
}
