import { useSpringCarousel } from 'react-spring-carousel'
import { Banner } from './Banner.jsx'

export default function BannerSlider() {

    const { carouselFragment } =  useSpringCarousel({
        withLoop: true,
        items:[
            {
                id:'item1',
                renderItem:<Banner/>
            },
            {
                id:'item2',
                renderItem:<Banner/>
            }
        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
