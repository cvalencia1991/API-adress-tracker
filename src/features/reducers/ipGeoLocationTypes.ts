export interface IpAddressState {
  ip: string | null;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  } | null;
  isp: string | null;
  loading: boolean;
}

export interface FetchIpAddressArgs {
  ipAddress: string;
}

export interface rejectValue {
  rejectValue: { error: string };
}
