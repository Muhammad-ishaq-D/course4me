const MAJOR_CITIES = [
  "london",
  "manchester",
  "birmingham",
  "leeds",
  "glasgow",
  "liverpool",
  "bristol",
  "sheffield",
  "edinburgh",
  "cardiff",
  "newcastle",
  "nottingham",
  "leicester",
  "coventry",
  "bradford",
];

export const PARKING_PRESETS = {
  available_nearby: { main: "Available", sub: "nearby" },
  on_site: { main: "On-site", sub: "parking" },
  limited: { main: "Limited", sub: "street parking" },
  free_onsite: { main: "Free parking", sub: "on site" },
};

export const COMMUTE_PRESETS = {
  short_walk: { main: "Short walk", sub: "from station" },
  near_station: { main: "Near station", sub: "5–10 min walk" },
  public_transport: { main: "Public transport", sub: "links nearby" },
  excellent_links: { main: "Excellent links", sub: "bus & rail" },
};

export function deriveLocationAmenities(location, geocodeMeta = {}) {
  if (location?.parkingMain && location?.commuteMain) {
    return {
      parking: {
        main: location.parkingMain,
        sub: location.parkingSub || "",
      },
      commute: {
        main: location.commuteMain,
        sub: location.commuteSub || "",
      },
    };
  }

  const region = (geocodeMeta.region || "").toLowerCase();
  const district = (geocodeMeta.adminDistrict || "").toLowerCase();
  const cityName = (location?.name || "").toLowerCase();
  const combined = `${region} ${district} ${cityName}`;

  const isLondon = combined.includes("london");
  const isMajorCity =
    isLondon || MAJOR_CITIES.some((city) => combined.includes(city));

  if (isLondon) {
    return {
      parking: PARKING_PRESETS.available_nearby,
      commute: COMMUTE_PRESETS.short_walk,
    };
  }

  if (isMajorCity) {
    return {
      parking: PARKING_PRESETS.available_nearby,
      commute: COMMUTE_PRESETS.near_station,
    };
  }

  return {
    parking: PARKING_PRESETS.free_onsite,
    commute: COMMUTE_PRESETS.public_transport,
  };
}

export function getParkingPresetKey(location) {
  const entry = Object.entries(PARKING_PRESETS).find(
    ([, preset]) =>
      preset.main === location?.parkingMain &&
      preset.sub === (location?.parkingSub || ""),
  );
  return entry?.[0] || "";
}

export function getCommutePresetKey(location) {
  const entry = Object.entries(COMMUTE_PRESETS).find(
    ([, preset]) =>
      preset.main === location?.commuteMain &&
      preset.sub === (location?.commuteSub || ""),
  );
  return entry?.[0] || "";
}
