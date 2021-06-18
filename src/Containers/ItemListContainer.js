import React, { useState, useEffect } from "react";
import List from "../components/ItemList/ItemList";
import {db} from "../firebase"


export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect (() =>{
    function getProducts() {
      const itemCollection = db.collection('Items')
        itemCollection
          .get()
              .then(snapshot => {
                let items = snapshot.docs.map(doc => {
                      let item = doc.data()
                      return {
                          id: doc.id,
                          ... item
                      }
                  })
                setItems(items)
              })
    }
  getProducts()
  },[])

  return (
      <List items={items}  />
  );
}