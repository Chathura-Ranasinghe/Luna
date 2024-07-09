// types.ts
export interface NasaApodData {
  url: string;
  title: string;
  explanation: string;
  media_type: string;
}

export interface ErrorData {
  message: string;
  code?: string;
}

export interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  relative_velocity: {
    kilometers_per_hour: string;
  };
  miss_distance: {
    kilometers: string;
  };
}

export interface EstimatedDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface NeoWsData {
  id: string;
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    kilometers: EstimatedDiameter;
  };
  close_approach_data: CloseApproachData[];
}
