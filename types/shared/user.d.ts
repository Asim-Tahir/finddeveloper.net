declare namespace User {
  namespace Address {
    interface GeoLocation {
      lat: string;
      lng: string;
    }

    interface Record {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: Address.GeoLocation;
    }
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  interface Record {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address.Record;
    phone: string;
    website: string;
    company: Company;
  }
}
