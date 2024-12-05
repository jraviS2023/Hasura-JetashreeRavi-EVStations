import * as sdk from "@hasura/ndc-lambda-sdk";

type EVChargingStation = {
  stationName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  fuelType: string;
  latitude: number;
  longitude: number;
  evNetwork?: string;
  connectors: string[];
  evDcFastNum?: number;
  evLevel1EvseNum?: number;
  evLevel2EvseNum?: number;
  evPricing?: string;
  evWorkplaceCharging?: boolean;
};

type EVChargingResponse = {
  totalResults: number;
  stations: EVChargingStation[];
};

type NrelApiResponse = {
  total_results: number;
  fuel_stations: Array<{
    station_name: string;
    street_address: string;
    city: string;
    state: string;
    zip: string;
    fuel_type_code: string;
    latitude: number;
    longitude: number;
    ev_network?: string;
    ev_connector_types: string[];
    evDcFastNum?: number;
    evLevel1EvseNum?: number;
    evLevel2EvseNum?: number;
    evPricing?: string;
    evWorkplaceCharging?: boolean;
  }>;
};

/**
 * Fetches nearby EV charging stations based on provided parameters.
 * @readonly
 * @param {string} latitude - Latitude of the location.
 * @param {string} longitude - Longitude of the location.
 * @param {number} radius - Search radius in miles.
 * @param {number} limit - Maximum number of results to return.
 * @returns {Promise<EVChargingResponse>} - List of EV charging stations within the given radius.
 */
export async function getEVChargingStations(
  latitude: string,
  longitude: string,
  radius: number = 5,
  limit: number = 10
): Promise<EVChargingResponse> {
  const API_KEY = "RPh20EZMmK0a238Gvp4YABkEw4ZfUvY6nWB9B5Po"; // Replace with your API key
  const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${API_KEY}&latitude=${latitude}&longitude=${longitude}&radius=${radius}&limit=${limit}&fuel_type=ELEC`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new sdk.UnprocessableContent(`Failed to fetch EV charging stations: ${response.statusText}`);
  }

  const data = (await response.json()) as NrelApiResponse;

  return {
    totalResults: data.total_results,
    stations: data.fuel_stations.map((station) => ({
      stationName: station.station_name,
      address: station.street_address,
      city: station.city,
      state: station.state,
      zip: station.zip,
      fuelType: station.fuel_type_code,
      latitude: station.latitude,
      longitude: station.longitude,
      evNetwork: station.ev_network,
      connectors: station.ev_connector_types,
    })),
  };
}
