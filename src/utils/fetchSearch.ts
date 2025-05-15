import axios from "axios";

export async function fetchSearch({searchDataHandler, xid}:{searchDataHandler: (value:any) => void, xid: string | undefined}) {
  const fetchData = async () => {
    const apiUrl = 'https://api.opentripmap.com/0.1/en/places/xid/' + `${xid}`;
    const apiKey = "5ae2e3f221c38a28845f05b63c4541753ad62fc8c2b126b0b6433cb6";
    try {
      const response = await axios.get(
      // "https://nominatim.openstreetmap.org/search",
      apiUrl,
      {
        params: {
          // Opentripmap 
          lang: 'en',
          apikey: apiKey,
          format: 'json',
          detailed: 'true',
          'radius': 1000,
          'limit': 1, 
        },
      }
      );
      searchDataHandler(response.status == 200 ? response.data : undefined)
    } catch (error) {
      console.error("Error fetching search object:", error)
    }
  }
  
  fetchData()
}