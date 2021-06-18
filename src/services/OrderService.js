import {db} from '../firebase';

export default function Order(cart, buyer, totalPrice) {
        return db.collection("ordenes").add({
        Comprador:{name: buyer.name, email: buyer.email, phone: buyer.phone},
        items:cart, total: totalPrice,
        date: Date()
    }).then(function(docRef) {
        return docRef.id
    })        
    }