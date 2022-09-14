import useGsapEffect from './useGsapEffect'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const defaultParams = {
  y: 30,
  opacity: 0,
  delay: 0.1,
  stagger: 0.1,
  duration: 0.5,
  ease: 'expo.out',
}

export default useGsapEffect((element, params = {}) => {
  const markers = params.markers
  delete params.markers
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 95%',
      markers: markers,
    },
    ...defaultParams,
    ...params,
  })
})
