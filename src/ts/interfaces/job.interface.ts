import { City } from './city.interface';
import { Company } from './company.interface';

export interface Job {
  id: string,
  title: string,
  slug: string,
  cities: Array<City>,
  description: string,
  company: Company,
  isPublished: boolean,
  commitment: {
    title: string,
  }
}