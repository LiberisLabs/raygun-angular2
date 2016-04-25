interface Navigator {
  hardwareConcurrency: number;
  oscpu: string;
  platform: string;
  vendor: string;
}

interface Screen {
  orientation: {
    type: string;
  }
}