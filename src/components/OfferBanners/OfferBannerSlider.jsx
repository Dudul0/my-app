import { useSpringCarousel } from 'react-spring-carousel'
import { Banner } from './Banner.jsx'
import Timer from '../Timer/Timer.js'

export default function BannerSlider() {

    const { carouselFragment } =  useSpringCarousel({
        withLoop: true,
        items:[
            {
                id:'item1',
                renderItem:<Banner time={Timer(`December, ${new Date().getDate() + 1}, 2024`)}/>
            },
            {
                id:'item2',
                renderItem:<Banner time={Timer(`December, ${new Date().getDate() + 1}, 2024`)}/>
            }
        ]
        
                
 
    })

    return (
        <div className='overflow-hidden'>
            {carouselFragment}
        </div>
  )
}
