export interface INews {
  id: string,
  url: string,
  title: string
  listingDescription: string
  listingImage: [{
    url: string,
    credit: string,
    altText: string,
    title: string,
    description: string,
    caption: string
  }],
  relatedParks: [],
  latitude: string,
  longitude: string,
  latLong: string
}