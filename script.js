function parseGNGGA(sentence) {
  const parts = sentence.split(",");

  if (parts[0] !== "$GNGGA") {
    return null; // Not a GNGGA sentence
  }

  const data = {
    type: "GNGGA",
    time: parts[1] ? new Date("1970-01-01T" + parts[1].slice(0, 2) + ":" + parts[1].slice(2, 4) + ":" + parts[1].slice(4, 6) + "Z") : null,
    latitude: parts[2] ? parseFloat(parts[2].slice(0, 2)) + parseFloat(parts[2].slice(2)) / 60 : null,
    latitudeDirection: parts[3] || null,
    longitude: parts[4] ? parseFloat(parts[4].slice(0, 3)) + parseFloat(parts[4].slice(3)) / 60 : null,
    longitudeDirection: parts[5] || null,
    quality: parseInt(parts[6], 10) || null,
    satellites: parseInt(parts[7], 10) || null,
    hdop: parseFloat(parts[8]) || null,
    altitude: parseFloat(parts[9]) || null,
    altitudeUnits: parts[10] || null,
    geoidSeparation: parseFloat(parts[11]) || null,
    geoidSeparationUnits: parts[12] || null,
    ageOfDifferential: parseFloat(parts[13]) || null,
    differentialStationID: parts[14] ? parts[14].split("*")[0] : null,
  };

  return data;
}

// Example usage:
const sentence = "$GNGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47";
const parsedData = parseGNGGA(sentence);
console.log(parsedData);
