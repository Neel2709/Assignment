import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  myArray: any[] = [];

  constructor(private afs : AngularFirestore) {
  }

  getProduct(){
    return this.afs.collection('Products').snapshotChanges();
  }

  getProductDoc(id:any) {
    return this.afs
      .collection('Products')
      .doc(id)
      .get();
  }

}
