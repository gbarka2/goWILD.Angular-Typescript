export interface Park {
  id: number
  full_name: string
  description: string
  latitude: string
  longitude: string
  lat_long: string
  state: string
  phone: string
  email: string
  directions: string
  weather: string
  name: string
  park_type: string
  created_at: string
  updated_at: string
  addresses: [{
    id: number
    line1: string
    line2: string
    city: string
    state: string
    zipcode: string
    created_at: string
    updated_at: string
    park_id: number
  }]
  fees: [{
    id: number
    cost: string
    description: string
    title: string
    created_at: string
    updated_at: string
    park_id: number
  }]
  images: [{
    id: number
    credit: string
    title: string
    alt_text: string
    caption: string
    url: string
    created_at: string
    updated_at: string
    park_id: number
  }]
}