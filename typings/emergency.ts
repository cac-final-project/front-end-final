export interface IAlert {
  id: string;
  type: string;
  geometry: Geometry; // Define Geometry interface based on your requirement
  properties: AlertProperties;
}

interface AlertProperties {
  "@id": string;
  "@type": string;
  id: string;
  areaDesc: string;
  geocode: {
    SAME: string[];
    UGC: string[];
  };
  affectedZones: string[];
  sent: string;
  effective: string;
  onset: string;
  expires: string;
  ends: string;
  status: string;
  messageType: string;
  category: string;
  severity: string;
  certainty: string;
  urgency: string;
  event: string;
  sender: string;
  senderName: string;
  headline: string;
  description: string;
  instruction: string;
  response: string;
  parameters: Record<string, string[]>; // Using Record for a more defined type than a simple index signature
}

interface Geometry {
  type: string;
  coordinates: number[][][];
}
