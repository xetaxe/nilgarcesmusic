import { SVGProps } from "react";

export function PoemIcon( props: SVGProps<SVGSVGElement> ) {
  return (
    <svg fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M304.615-120q-43.384 0-74-30.615-30.615-30.616-30.615-74V-720q0-50.308 34.846-85.154T320-840h440v550.769q-26.538 0-45.577 19.039-19.038 19.038-19.038 45.577 0 26.538 19.038 45.577Q733.462-160 760-160v40H304.615ZM240-305.462q13.231-11.615 29.385-17.692 16.153-6.077 35.23-6.077h30.77V-800H320q-32.692 0-56.346 23.654Q240-752.692 240-720v414.538Zm135.385-23.769H720V-800H375.385v470.769ZM240-305.462v-479.153 479.153ZM304.615-160h374.539q-11.385-13.231-17.577-29.269-6.192-16.039-6.192-35.346 0-18.308 6.077-34.846 6.076-16.539 17.692-29.77H304.615q-27.538 0-46.077 19.039Q240-251.154 240-224.615q0 27.538 18.538 46.077Q277.077-160 304.615-160Z"/>
    </svg>
  )
}