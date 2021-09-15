import Link from 'next/link';
import cardsStyles from '../styles/Cards.module.css';

function CardItem(props) {

    return (
        <>
            <li className={cardsStyles.cards_item}>
                <Link className={cardsStyles.cards_item_link} href={props.path}>
                    <figure className={cardsStyles.cards_item_pic_wrap} data-category={props.label}>
                        <img
                            src={props.src}
                            alt='Travel'
                            className={cardsStyles.cards_item_img}/>
                    </figure>
                </Link>
                <div className={cardsStyles.cards_item_info}>
                    <h5 className={cardsStyles.cards_item_text}>{props.text} </h5>
                </div>
            </li>
        </>
    )
}

export default CardItem;
