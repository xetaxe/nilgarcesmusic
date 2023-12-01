export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <a href="">
      <svg aria-hidden="true" viewBox="0 0 183 48" {...props}>
        <text x="0" y="35" style={{fill: "#2d1f12"}}>
          Nil Garcés
        </text>
      </svg>
    </a>
  )
}
