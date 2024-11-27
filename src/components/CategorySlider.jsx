import { useSpringCarousel } from 'react-spring-carousel'
import { Category } from './Category.jsx'

export default function CategorySlider() {

    const { carouselFragment } =  useSpringCarousel({
        itemsPerSlide: 4.5,
        withLoop: false,
        items:[
            {
                id:'item1',
                renderItem:<Category/>
            },
            {
                id:'item2',
                renderItem:<Category/>
            },
            {
                id:'item2',
                renderItem:<Category/>
            },
            {
                id:'item2',
                renderItem:<Category/>
            },
            {
                id:'item2',
                renderItem:<Category/>
            },
            {
                id:'item2',
                renderItem:<Category/>
            }

        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
