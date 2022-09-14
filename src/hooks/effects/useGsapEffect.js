import { useEffect } from 'react'
import { gsap } from 'gsap'

const useGsapEffect = effectFn => {
  const useApplyEffectByRef = (_selector, _userParams) => {
    const selector = typeof _selector === 'string' ? _selector : false
    const userParams = selector ? _userParams : _selector

    const items = []

    useEffect(() => {
      const element = selector ? selector : items
      gsap.killTweensOf(element)
      effectFn(element, userParams)

      return () => {
        gsap.killTweensOf(element)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return el => {
      if (el && !items.includes(el)) items.push(el)
    }
  }
  return useApplyEffectByRef
}

export default useGsapEffect
