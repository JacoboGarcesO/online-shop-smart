import { environment } from '../../../environments/environment';

export const URL_RESOURCES = {
  food: `${environment.apiUrl}/Food`,
  foodWithParams: (foodId: number) => `${environment.apiUrl}/Food/${foodId}`,
  pexel: (keyword: string) => `${environment.pexelApiUrl}/search?query=${keyword}&per_page=1`
};
