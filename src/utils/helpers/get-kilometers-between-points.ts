export const GetKilometersBetweenPoints = ({
  latitudeA,
  longitudeA,
  latitudeB,
  longitudeB,
}: {
  latitudeA: number;
  longitudeA: number;
  latitudeB: number;
  longitudeB: number;
}) => {
  const R = 6371e3;
  const φ1 = (latitudeA * Math.PI) / 180;
  const φ2 = (latitudeB * Math.PI) / 180;
  const Δφ = ((latitudeB - latitudeA) * Math.PI) / 180;
  let Δλ = ((longitudeB - longitudeA) * Math.PI) / 180;

  const Δψ = Math.log(
    Math.tan(Math.PI / 4 + φ2 / 2) / Math.tan(Math.PI / 4 + φ1 / 2),
  );

  const q = Math.abs(Δψ) > 10e-12 ? Δφ / Δψ : Math.cos(φ1);

  // if dLon over 180° take shorter rhumb line across the anti-meridian:
  if (Math.abs(Δλ) > Math.PI) {
    Δλ = Δλ > 0 ? -(2 * Math.PI - Δλ) : 2 * Math.PI + Δλ;
  }

  return Math.sqrt(Δφ * Δφ + q * q * Δλ * Δλ) * R;
};
