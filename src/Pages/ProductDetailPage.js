import React from 'react';
import {useParams} from 'react-router-dom'
import ItemDetailContainer from '../Containers/ItemDetailContainer';
import '../components/ItemList/Item.css'

export default function ProductDetailPage() {
    const params = useParams()
    const id = params.id
    return (

    <ItemDetailContainer id={id}/>
    
    ) 
}  