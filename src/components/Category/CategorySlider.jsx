import { useSpringCarousel } from 'react-spring-carousel'
import { Category } from './Category.jsx'

export default function CategorySlider() {

    const { carouselFragment } =  useSpringCarousel({
        itemsPerSlide: 4.29,
        withLoop: false,
        items:[
            {
                id:'item1',
                renderItem:<Category/>
            },
            {
                id:'item3',
                renderItem:<Category/>
            },
            {
                id:'item4',
                renderItem:<Category/>
            },
            {
                id:'item5',
                renderItem:<Category/>
            },
            {
                id:'item6',
                renderItem:<Category/>
            },
            {
                id:'item7',
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
