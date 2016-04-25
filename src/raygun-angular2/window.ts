export interface ExtendedNavigator extends Navigator {
  hardwareConcurrency: number;
  oscpu: string;
  platform: string;
  vendor: string;
}

export interface ExtendedScreen extends Screen {
  orientation: {
    type: string;
  }
}