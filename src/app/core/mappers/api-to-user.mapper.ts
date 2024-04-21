import { Injectable } from '@angular/core';
import { IMapperIn } from '../models/mapper.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiToUserMapper implements IMapperIn<IUser> {
  map(payload: any): IUser {
    if (payload.user === null) return null;
  
    return {
      email: payload.user?.email,
      id: payload.user?.uid,
      name: payload.user?.displayName,
      photoUrl: payload.user?.photoURL,
    };
  }
}
