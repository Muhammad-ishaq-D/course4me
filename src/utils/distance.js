const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export function isUkPostcode(value) {
  return UK_POSTCODE_REGEX.test(value.trim());
}

/**
 * Geocode a UK postcode via postcodes.io.
 */
export async function geocodePostcode(postcode) {
  const normalized = postcode.replace(/\s+/g, "").toUpperCase();
  if (!normalized) {
    throw new Error("Postcode is required");
  }

  const response = await fetch(
    `https://api.postcodes.io/postcodes/${encodeURIComponent(normalized)}`,
  );
  const data = await response.json();

  if (data.status !== 200 || !data.result) {
    throw new Error(`Invalid postcode: ${postcode.trim()}`);
  }

  return {
    latitude: data.result.latitude,
    longitude: data.result.longitude,
    postcode: data.result.postcode,
    adminDistrict: data.result.admin_district,
    region: data.result.region,
  };
}

/**
 * Geocode a UK city/town name via postcodes.io places search.
 */
export async function geocodePlace(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error("Location is required");
  }

  const response = await fetch(
    `https://api.postcodes.io/places?q=${encodeURIComponent(trimmed)}&limit=1`,
  );
  const data = await response.json();

  if (data.status !== 200 || !data.result?.length) {
    throw new Error(`Invalid location: ${trimmed}`);
  }

  const place = data.result[0];
  return {
    latitude: place.latitude,
    longitude: place.longitude,
  };
}

/**
 * Geocode a user search term — UK postcode or place/city name.
 */
export async function geocodeLocation(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error("Location is required");
  }

  if (isUkPostcode(trimmed)) {
    return geocodePostcode(trimmed);
  }

  return geocodePlace(trimmed);
}

/**
 * Haversine distance in miles between two lat/lng points.
 */
export function calculateDistanceMiles(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMiles * c;
}

/**
 * Human-readable distance label for the results UI.
 */
export function formatDistanceFromUser(miles) {
  if (miles == null || Number.isNaN(miles) || miles < 0) {
    return "";
  }

  if (miles < 0.05) {
    return "Less than 0.1 miles from you";
  }

  const value = miles < 10 ? Math.round(miles * 10) / 10 : Math.round(miles);
  const formatted = Number.isInteger(value)
    ? String(value)
    : value.toFixed(1).replace(/\.0$/, "");
  const unit = value === 1 ? "mile" : "miles";

  return `${formatted} ${unit} from you`;
}

/**
 * Build venue address line: "[Building/Address] - [Postcode]".
 */
export function formatVenueAddress(location) {
  const venue = location.address?.trim();
  const postcode = location.postcode?.trim();

  if (venue && postcode) {
    return `${venue} - ${postcode.toUpperCase()}`;
  }
  if (venue) return venue;
  if (postcode) return postcode.toUpperCase();
  return null;
}

/**
 * Google Maps URL for a venue — prefers stored coordinates, falls back to address search.
 */
export function getGoogleMapsUrl(location) {
  const { latitude, longitude, name, postcode } = location;
  const address = formatVenueAddress(location);

  if (latitude != null && longitude != null) {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }

  const query =
    address ||
    [location.address, name, postcode].filter(Boolean).join(", ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
