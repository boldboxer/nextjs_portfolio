// global.d.ts
declare module "react-gtm-module" {
  interface TagManagerArgs {
    gtmId: string;
    dataLayer?: object;
    dataLayerName?: string;
    auth?: string;
    preview?: string;
  }

  const TagManager: {
    initialize: (args: TagManagerArgs) => void;
    dataLayer: (args: object) => void;
  };

  export default TagManager;
}

// 👇 Put this OUTSIDE of any declare module
export {};

type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}