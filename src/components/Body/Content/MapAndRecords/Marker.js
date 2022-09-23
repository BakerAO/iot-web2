import orangeMarker from '../../../../assets/markerOrange.svg'

export default function Marker(props) {
  const { alias } = props

  return (
    <div style={{ height: '50px', width: '50px', transform: 'translate(-50%, -100%)' }}>
      <div className="row center middle" style={{ transform: 'translate(0%, 75%)' }}>
        {alias}
      </div>
      <img
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain'
        }}
        src={orangeMarker}
        alt="Marker"
      />
    </div>
  )
}
