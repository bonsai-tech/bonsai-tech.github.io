import useGsapEffect from "./useGsapEffect";
import { gsap } from "gsap";

const defaultValues = {
  y: 20,
  opacity: 0,
  duration: 0.7,
  delay: 0,
  ease: "power2.out",
};

export default useGsapEffect((element, params = {}) => {
  gsap.to(element, {
    opacity: 1,
    duration: params.duration,
    delay: params.delay,
  });
  gsap.from(element, { ...defaultValues, ...params });
});
