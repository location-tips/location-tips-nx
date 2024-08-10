'use server';

import { PostLocationsResponse } from '@types';

export async function mockupLocations(
  _prevState?: any,
  formData?: FormData,
  expected?: 'full' | 'qdesc' | 'zero'
): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (expected && expected === 'qdesc') {
          resolve(resultMockupQDesc);
        } else if (expected && expected === 'zero') {
          resolve(resultMockupZeroResults);
        } else {
          resolve(resultMockup);
        }
      } catch (error) {
        console.error('Error:', error);
        reject(error);
      }
    }, 1000);
  });
}

const resultMockup: any = {
  searchResult: [
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'Village of flowers',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'Village of flowers',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'Village of flowers',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'Tropical garden',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'Tropical garden',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'Tropical garden',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'Dust II styled decorations',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'Dust II styled decorations',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'Dust II styled decorations',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
    {
      uid: `vgdZvVUE65P60oJHyOl0sbH5rg03${
        Math.floor(Math.random() * 999999) + 1
      }`,
      image: {
        keywords: [
          'tree',
          'fallen tree',
          'meadow',
          'grass',
          'nature',
          'sky',
          'clouds',
          'sunny',
          'summer',
          'landscape',
          'outdoors',
          'trunk',
          'branches',
          'woodland',
        ],
        description:
          'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
        location: {
          name: 'National Park Zuid-Kennemerland',
          coordinates: {
            latitude: 52.40218333333333,
            longitude: 4.597874999999999,
          },
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          type: 'National Park',
        },
        title: 'Fallen Tree in a Sunny Meadow',
        url: '4897e246-f120-4004-96c9-185114bbffa1.webp',
      },
      keywords: [
        'tree',
        'fallen tree',
        'meadow',
        'grass',
        'nature',
        'sky',
        'clouds',
        'sunny',
        'summer',
        'landscape',
        'outdoors',
        'trunk',
        'branches',
        'woodland',
      ],
      userDescription: '',
      geohash: 'u1760es0f6',
      description:
        'A captivating image of a large fallen tree in a grassy meadow, set against a backdrop of a vibrant blue sky adorned with white clouds. The tree, now resting on its side, reveals its intricate network of bare branches that reach towards the sky. The lush green grass of the meadow adds a touch of vibrancy to the scene, creating a serene and peaceful atmosphere.',
      location: {
        coordinates: {
          latitude: 52.40218333333333,
          longitude: 4.597874999999999,
        },
        name: 'National Park Zuid-Kennemerland',
        description:
          'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
        type: 'National Park',
      },
      title: 'National Park Zuid-Kennemerland',
      id: `KbDOoHZ0RQEdcQBh1xes${Math.floor(Math.random() * 999999) + 1}`,
      score: 4.673143197562356,
      images: {
        original: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        small: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
        medium: `https://picsum.photos/600/600?random=${
          Math.floor(Math.random() * 99) + 1
        }`,
      },
      nearest: [
        {
          title: '2nd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '3rd object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '4th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
        {
          title: '5th object',
          description:
            'National Park Zuid-Kennemerland is a national park in the province of North Holland, Netherlands. It is known for its diverse landscapes, including dunes, forests, and beaches.',
          images: {
            original: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            small: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
            medium: `https://picsum.photos/600/600?random=${
              Math.floor(Math.random() * 99) + 1
            }`,
          },
        },
      ],
    },
  ],
  queryDescription: {
    near: [
      {
        name: 'Zandvoort',
        type: 'Town',
        coordinates: {
          latitude: 52.366667,
          longitude: 4.533333,
        },
      },
    ],
    in: [],
    location: [],
    distance: 10,
    description: 'Find a dead tree within a 10km radius of Zandvoort.',
    originalPropmt: 'dead tree in a radius 10km from Zandvoort',
    prompt: 'dead tree',
    voice: null,
    voiceKeywords: null,
    image: null,
  },
};

const resultMockupQDesc: any = {
  searchResult: [],
  queryDescription: {
    near: [
      {
        name: 'Los Angeles',
        type: 'City',
        coordinates: {
          latitude: 34.0522,
          longitude: -118.2437,
        },
      },
    ],
    in: [],
    location: [
      {
        coordinates: {
          latitude: 33.5858,
          longitude: -118.4068,
        },
        name: 'Long Beach',
        type: 'City',
      },
      {
        coordinates: {
          latitude: 33.9751,
          longitude: -118.4695,
        },
        name: 'Redondo Beach',
        type: 'City',
      },
      {
        coordinates: {
          latitude: 33.885,
          longitude: -118.3793,
        },
        name: 'Manhattan Beach',
        type: 'City',
      },
      {
        coordinates: {
          latitude: 33.7683,
          longitude: -118.1956,
        },
        name: 'Rancho Palos Verdes',
        type: 'City',
      },
    ],
    distance: 64.37,
    description:
      'Beaches within 64.37 kilometers of Los Angeles include Long Beach, Redondo Beach, Manhattan Beach, and Rancho Palos Verdes.',
    originalPropmt: 'Beach in 40 miles from Los Angeles',
    prompt: 'Beach',
    voice: null,
    voiceKeywords: null,
    image: null,
  },
};

const resultMockupZeroResults: any = {
  searchResult: [],
  queryDescription: {
    near: [
      {
        name: 'Bishkek',
        type: 'city',
        coordinates: {
          latitude: 42.8746,
          longitude: 74.5698,
        },
      },
    ],
    in: [
      {
        name: 'Kyrgyzstan',
        type: 'country',
        description: 'Country in Central Asia',
        coordinates: {
          latitude: 41.2044,
          longitude: 74.7661,
        },
        boundingBox: {
          north: 43.2298,
          south: 39.161,
          east: 80.5681,
          west: 69.2078,
        },
      },
    ],
    location: [],
    distance: 64.37,
    description:
      "I couldn't find any beaches within 64.37 kilometers of Bishkek. Kyrgyzstan is a landlocked country, so there are no beaches directly in the country.",
    originalPropmt: 'Beach in 40 miles from Bishkek',
    prompt: 'beach',
    voice: null,
    voiceKeywords: null,
    image: null,
  },
};
