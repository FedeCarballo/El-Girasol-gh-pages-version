import React from 'react'
import './IndexPage.css'
import { Link} from 'react-router-dom';
export default function IndexPage() {
    return (
        <div className="Index__Container">
            <div className="Index__Title">
            <h1 className="Index__H1">Productos el girasol</h1>
            <Link to={`/Tienda`}><button className="btn btn-info Index__Tienda">Ir a la tienda</button></Link>
            </div>
        </div>
    )
}
