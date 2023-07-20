interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Car Owner'],
  customerRoles: ['Passenger'],
  tenantRoles: ['Car Owner', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'Car pool',
  addOns: ['chat', 'file'],
};
