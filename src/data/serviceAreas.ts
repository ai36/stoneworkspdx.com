export interface ServiceArea {
  name: string;
  state: string;
  primary?: boolean;
}

export const serviceAreas: ServiceArea[] = [
  // Oregon - Primary
  { name: 'Portland', state: 'OR', primary: true },
  { name: 'Beaverton', state: 'OR', primary: true },
  { name: 'Lake Oswego', state: 'OR', primary: true },
  { name: 'Tigard', state: 'OR', primary: true },
  { name: 'West Linn', state: 'OR', primary: true },
  { name: 'Oregon City', state: 'OR', primary: true },
  // Oregon - Secondary
  { name: 'Hillsboro', state: 'OR' },
  { name: 'Clackamas', state: 'OR' },
  { name: 'Milwaukie', state: 'OR' },
  { name: 'Gresham', state: 'OR' },
  { name: 'Tualatin', state: 'OR' },
  { name: 'Sherwood', state: 'OR' },
  { name: 'Wilsonville', state: 'OR' },
  { name: 'Happy Valley', state: 'OR' },
  { name: 'Gladstone', state: 'OR' },
  // Washington - Primary
  { name: 'Vancouver', state: 'WA', primary: true },
  { name: 'Camas', state: 'WA', primary: true },
  // Washington - Secondary
  { name: 'Battle Ground', state: 'WA' },
  { name: 'Washougal', state: 'WA' },
  { name: 'Ridgefield', state: 'WA' },
  { name: 'Salmon Creek', state: 'WA' },
];

export const getPrimaryAreas = (): ServiceArea[] => {
  return serviceAreas.filter((area) => area.primary);
};

export const getAreasByState = (state: 'OR' | 'WA'): ServiceArea[] => {
  return serviceAreas.filter((area) => area.state === state);
};
