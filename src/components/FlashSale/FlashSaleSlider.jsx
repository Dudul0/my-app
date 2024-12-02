import { useSpringCarousel } from 'react-spring-carousel'
import { Product } from './FlashSale.jsx'
import productIMaage1 from '../../images/discountCards/product1.png'
import productIMaage2 from '../../images/discountCards/product2.png'
import productIMaage3 from '../../images/discountCards/product3.png'
export default function FlashSaleSlider() {

    const { carouselFragment } =  useSpringCarousel({
        itemsPerSlide: 2.3,
        withLoop: false,
        items:[
            {
                id:'item1',
                renderItem:<Product productImg={productIMaage1} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
            },
            {
                id:'item2',
                renderItem:<Product productImg={productIMaage2} productName='FS - QUILTED MAXI CROS... ' productPrice={100} productDiscount={45}/>
            },
            {
                id:'item3',
                renderItem:<Product productImg={productIMaage3} productName='FS - Nike Air Max 270 React...' productPrice={534} productDiscount={34}/>
            },
 

        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
