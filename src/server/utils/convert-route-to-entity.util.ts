const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  seats: 'seat',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
