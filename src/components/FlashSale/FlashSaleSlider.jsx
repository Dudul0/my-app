import { useSpringCarousel } from 'react-spring-carousel'
import { Product } from './FlashSale.jsx'

export default function FlashSaleSlider() {

    const { carouselFragment } =  useSpringCarousel({
        itemsPerSlide: 2.3,
        withLoop: false,
        items:[
            {
                id:'item1',
                renderItem:<Product/>
            },
            {
                id:'item2',
                renderItem:<Product/>
            },
            {
                id:'item3',
                renderItem:<Product/>
            },
            {
                id:'item4',
                renderItem:<Product/>
            },
            {
                id:'item5',
                renderItem:<Product/>
            },
            {
                id:'item6',
                renderItem:<Product/>
            }

        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
