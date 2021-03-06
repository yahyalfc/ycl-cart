import React, {Component} from 'react'
import MenuItem from '../menu-items/menu-items.component.jsx'
import './directory.styles.scss'

class Directory extends Component {
    constructor(){
        super()

        this.state={
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'shop/hats',
                    id:1
                },
                {
                    title: 'jackets',
                    imageUrl: 'http://i.ibb.co/px2tCc3/jackts.png',
                    linkUrl: 'shop/jackets',
                    id:2 
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'shop/sneakers',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    linkUrl: 'shop/womens',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'shop/mens',
                    size: 'large',
                    id: 5
                }

            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map( ({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        )
    }
}
export default Directory;

