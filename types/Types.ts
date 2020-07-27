export interface Result {
  pickup_eta: number;
  drivers: Driver[];
}

export interface Driver {
  driver_id: string;
  location: DriverLocation;
}

export interface DriverLocation {
  latitude: number;
  longitude: number;
  bearing: number;
}

export interface InitialState {
  initialCount: string;
  initialResult: Result | null;
  initialError: string | null;
  initialIsLoading: boolean;
}

export interface InitialCenter {
  lat: number;
  lng: number;
}
