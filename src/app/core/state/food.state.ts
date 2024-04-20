import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { IFood } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodState {
  private foods$: BehaviorSubject<IFood[]> = new BehaviorSubject([
    { 'id': 1, originalPrice: 200, 'name': 'Generic Frozen Chair', 'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', 'price': 41.00, 'stock': 7, 'image': { 'alt': 'A Reflection of a Woman and a Chair on Frozen Body of Water ', 'id': '14573150', 'src': 'https://images.pexels.com/photos/14573150/pexels-photo-14573150.jpeg' } },
    { 'id': 2, originalPrice: 200, 'name': 'Generic Frozen Chair', 'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', 'price': 42.00, 'stock': 7, 'image': { 'alt': 'A Reflection of a Woman and a Chair on Frozen Body of Water ', 'id': '14573150', 'src': 'https://images.pexels.com/photos/14573150/pexels-photo-14573150.jpeg' } },
    { 'id': 3, originalPrice: 200, 'name': 'Generic Frozen Chair', 'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', 'price': 43.00, 'stock': 7, 'image': { 'alt': 'A Reflection of a Woman and a Chair on Frozen Body of Water ', 'id': '14573150', 'src': 'https://images.pexels.com/photos/14573150/pexels-photo-14573150.jpeg' } },
    { 'id': 4, originalPrice: 200, 'name': 'Generic Frozen Chair', 'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', 'price': 44.00, 'stock': 7, 'image': { 'alt': 'A Reflection of a Woman and a Chair on Frozen Body of Water ', 'id': '14573150', 'src': 'https://images.pexels.com/photos/14573150/pexels-photo-14573150.jpeg' } },
    { 'id': 5, originalPrice: 200, 'name': 'Generic Frozen Chair', 'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', 'price': 45.00, 'stock': 7, 'image': { 'alt': 'A Reflection of a Woman and a Chair on Frozen Body of Water ', 'id': '14573150', 'src': 'https://images.pexels.com/photos/14573150/pexels-photo-14573150.jpeg' } }
  ]);
  private currentFood$: BehaviorSubject<IFood> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      foods: this.factory.state(this.foods$),
      currentFood: this.factory.state(this.currentFood$)
    };
  }
}
