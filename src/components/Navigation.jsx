import React from 'react'
import { Link } from 'react-router-dom';
import { Photo1 } from './Photo1';
import { Photo2 } from './Photo2';
import { Photo3 } from './Photo3';
import { Photo4 } from './Photo4';
import { Photo5 } from './Photo5';
import { Photo6 } from './Photo6';


const Navigation = () => {
    return (

        <div className="container mt-4 father center">
            <Link to="/photo1" className="links">
                <figure className="image-size">
                    <Photo1 />
                    <figcaption>Foto 1</figcaption>
                </figure>
            </Link>
            <Link to="/photo2" className="links">
                <figure className="image-size">
                    <Photo2 />
                    <figcaption>Foto2</figcaption>
                </figure>
            </Link>
            <Link to="/photo3" className="links">
                <figure className="image-size">
                    <Photo3 />
                    <figcaption>Foto 3</figcaption>
                </figure>
            </Link>
            <Link to="/photo4" className="links">
                <figure className="image-size">
                    <Photo4 />
                    <figcaption>Foto 4</figcaption>
                </figure>
            </Link>
            <Link to="/photo5" className="links">
                <figure className="image-size">
                    <Photo5 />
                    <figcaption>Foto 5</figcaption>
                </figure>
            </Link>
            <Link to="/photo6" className="links">
                <figure className="image-size">
                    <Photo6 />
                    <figcaption>Foto 6</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigation