export interface ExtendedNavigator extends Navigator {
  hardwareConcurrency?: number;
  oscpu?: string;
}

export interface ExtendedScreen extends Screen {
  orientation?: {
    type?: string;
  }
}

export interface ExtendedWindow extends Window {
  opr?: {
    addons?: any;
  }
  
  opera?: any;
  InstallTrigger?: any;
  HTMLElement?: HTMLElement;
  StyleMedia?: any;
  chrome?: {
    webstore?: any;
  }
  CSS?: any;
}

export interface ExtendedDocument extends Document {
  documentMode?: any;
}