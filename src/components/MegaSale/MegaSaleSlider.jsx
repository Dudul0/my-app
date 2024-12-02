import { useSpringCarousel } from 'react-spring-carousel'
import { Product }  from './MegaSale.jsx'
import productIMaage4 from '../../images/discountCards/product4.png'
import productIMaage5 from '../../images/discountCards/product5.png'
import productIMaage6 from '../../images/discountCards/product6.png'
export default function MegaSaleSlider() {

    const { carouselFragment } =  useSpringCarousel({
        itemsPerSlide: 2.4,
        withLoop: false,
        items:[
            {
                id:'item1',
                renderItem:<Product productImg={productIMaage4} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
            },
            {
                id:'item2',
                renderItem:<Product productImg={productIMaage5} productName='FS - QUILTED MAXI CROS... ' productPrice={100} productDiscount={45}/>
            },
            {
                id:'item3',
                renderItem:<Product productImg={productIMaage6} productName='FS - Nike Air Max 270 React...' productPrice={534} productDiscount={34}/>
            },
 

        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
