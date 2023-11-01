interface MatchedSubstring {
  length: number;
  offset: number;
}

interface Term {
  offset: number;
  value: string;
}

interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: MatchedSubstring[]; // Assuming this is an array of MatchedSubstring
  secondary_text: string;
}

export interface PlacePrediction {
  description: string;
  matched_substrings: MatchedSubstring[]; // Assuming this is an array of MatchedSubstring
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[]; // Assuming this is an array of Term
  types: string[];
}

export interface IRecommendedPlace {
  predictions: PlacePrediction[];
  status: string;
}
