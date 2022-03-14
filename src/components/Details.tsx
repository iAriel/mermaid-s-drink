import Image from 'react-bootstrap/Image'
import '../styles/details.scss'

export function Details(){
    return(
        <div className="details-container">
            <aside className="thumbnail-area">
                <Image className="thumbnail" src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" thumbnail/>
            </aside>
            <aside className="details-area">
                <p className="title">Título</p>
            </aside>
        </div>
    )
}