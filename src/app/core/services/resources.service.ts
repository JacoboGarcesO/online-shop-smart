import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IReview } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  getReviews(): Observable<IReview[]> {
    return of([
      {
        id: this.uuid(),
        userFullName: 'María Sánchez',
        review: 'Visité esta tienda de alimentos con algunas reservas, pero quedé gratamente sorprendida. Desde el momento en que entré, me recibió un aroma delicioso y acogedor. El personal era amable y conocedor, dispuesto a responder cualquier pregunta que tuviera sobre los productos. La variedad de alimentos frescos y de alta calidad me impresionó. Pude encontrar todo lo que necesitaba, desde productos orgánicos hasta opciones gourmet. Además, los precios eran razonables en comparación con otras tiendas similares. Sin duda volveré a hacer mis compras aquí y la recomendaré a amigos y familiares.',
        userProfileImage: 'https://i.pravatar.cc/150?u=1a3b8c3f-d60d-4ef4-8f8b-9f3c8750735d',
        rating: 5
      },
      {
        id: this.uuid(),
        userFullName: 'Pedro González',
        review: 'Esta tienda de alimentos es simplemente espectacular. Cada vez que entro, me sorprendo con la frescura y la calidad de los productos disponibles. La sección de frutas y verduras es especialmente impresionante, con una amplia variedad de productos orgánicos y locales. Además, el personal siempre está dispuesto a ayudar y brindar recomendaciones. He probado varios de los productos preparados que ofrecen, y todos han sido deliciosos. Los precios pueden ser un poco más altos que en otros lugares, pero la calidad vale la pena. Definitivamente recomendaría esta tienda a cualquier persona que busque alimentos frescos y saludables.',
        userProfileImage: 'https://i.pravatar.cc/150?u=2d4f0781-9e8c-4b44-a82f-22a3b8ae786b',
        rating: 5
      },
      {
        id: this.uuid(),
        userFullName: 'Laura Martínez',
        review: 'Mi experiencia en esta tienda de alimentos fue excelente. La variedad de productos disponibles es impresionante, y todos parecen ser de la más alta calidad. Me encantó la sección de productos locales, donde pude encontrar una amplia gama de opciones únicas y artesanales. El personal era amable y servicial, y me ayudó a encontrar todo lo que necesitaba. Los precios eran razonables, especialmente considerando la calidad de los productos. Definitivamente volveré y la recomendaré a mis amigos.',
        userProfileImage: 'https://i.pravatar.cc/150?u=3f9c1c6a-7e3b-46cc-952b-0b9dce31e147',
        rating: 4
      },
      {
        id: this.uuid(),
        userFullName: 'José Rodríguez',
        review: 'Me encanta esta tienda de alimentos. Tienen una amplia selección de productos frescos y saludables, que son difíciles de encontrar en otros lugares. La sección de productos orgánicos es especialmente impresionante. Además, el personal es amable y siempre está dispuesto a ayudar. Me gusta que tengan opciones para todos los gustos y necesidades dietéticas, desde veganos hasta omnívoros. Los precios pueden ser un poco altos, pero creo que vale la pena pagar más por productos de alta calidad. Definitivamente recomendaría esta tienda a cualquiera que busque alimentos frescos y saludables.',
        userProfileImage: 'https://i.pravatar.cc/150?u=4e526b65-28cd-44c5-a18e-5d46f43bc379',
        rating: 4
      },
      {
        id: this.uuid(),
        userFullName: 'Ana López',
        review: 'Esta tienda de alimentos es mi lugar favorito para hacer compras. Tienen todo lo que necesito, desde productos frescos hasta alimentos gourmet. Me encanta la selección de quesos y vinos que ofrecen, así como la sección de panadería, que siempre huele increíble. El personal es amable y conocedor, y siempre está dispuesto a ayudar. Los precios pueden ser un poco altos, pero creo que vale la pena por la calidad de los productos. Definitivamente recomendaría esta tienda a cualquier persona que busque alimentos de alta calidad y una experiencia de compra agradable.',
        userProfileImage: 'https://i.pravatar.cc/150?u=5a7e4c7f-18d7-40c5-a26e-42e6de124aa1',
        rating: 5
      }
    ]);
  }

  private uuid(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
