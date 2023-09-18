interface Location {
  country?: string;
  countrytype?: string;
  region?: string;
  regionType?: string;
  city?: string;
  cityType?: string;
}

export interface Image {
  url: string;
  thumbnail: string;
  location: Location;
  description: string;
}

type State = "Free" | "Reserved" | "Busy";

interface Price {
  id: string;
  date: string;
  nights: string;
  typeOne: string;
  typeTwo: string;
  smallAppartment: string;
  bigAppartment: string;
}

export interface Product {
  prices: {
    pricesArr: Price[]; // Додадете го ова својство
  };
  lastMinutePrices: number[];
}

export interface Momentss {
  id: string;
  destination: string;
  img: string;
}

export interface Arrangements {
  id: string;
  name: string;
  description: string;
  description2?: string;
  location: Location;
  transportationDescription: string;
  gallery: Image[];
  type: string;
  prices: Price[];
  availabilityDates: Date[];
  priceForNights: number;
  state: State[];
  isPublished: boolean;
  isTrending: boolean;
  isLastMinute: boolean;
  rating?: number;
  miscellanies?: string[];
  image: string;
  distance: string;
  nights: string;
  startDate?: number;
  endDate?: number;
}

export type CardType = {
  image: string;
  name: string;
  city: string;
  nights: string;
  distance: string;
  price: string;
};
export interface TestimonalCard {
  title: string;
  rating: number;
  image: string;
  description: string;
  arrangement: string;
}

export interface Destination {
  id: string;
  destination: string;
  img: string;
}

export interface Country {
  id: string;
  destination: string;
}
