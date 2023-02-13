import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function Icon({icon, trigger, color, target}) {
  return (
    <lord-icon 
        class='icon'
        trigger= { trigger || "hover"}
        colors={`primary:${color || 'black'}`}
        target={target}
        src={`./icons/${(/(-solid)/ig).test(icon)?'system-solid':'system-outline'}/${icon}.json`}
    />
  )
}

export default Icon