import SearchLocationForm from '@front/components/searchLocation/searchLocation';
import Page from '@front/components/page/page';

export const metadata = {}

export default function Index() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapId = process.env.GOOGLE_MAPS_ID;

  return (
    <Page>
      {apiKey && mapId && <SearchLocationForm apiKey={apiKey} mapId={mapId} />}
    </Page>
  );
}
