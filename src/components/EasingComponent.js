import {useSpring} from 'react-spring';
import {easings,animated} from 'react-spring';

function EasingComponent() {
    const { background, rotateZ } = useSpring({
      from: {
        background: '#46e891',
        rotateZ: 0,
      },
      to: {
        background: '#277ef4',
        rotateZ: 225,
      },
      config: {
        duration: 2000,
        easing: easings.easeInOutQuart,
      },
      loop: { reverse: true },
    })
  
    return (
      <animated.div
        style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ }}
      />
    )
  }

  export default EasingComponent;