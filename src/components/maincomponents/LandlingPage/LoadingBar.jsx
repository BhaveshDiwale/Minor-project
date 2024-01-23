import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loadingbar = (props) => {
  const ref = useRef(null)

  return (
    <div>
      <LoadingBar color='#0000ff' height={3} ref={ref} />
      <button className={props.style} onClick={() => ref.current.continuousStart()}>
        {props.name}
      </button>
      {/* <button onClick={() => ref.current.staticStart()}>
        Start Static Loading Bar
      </button>
      <button onClick={() => ref.current.complete()}>Complete</button>
      <br /> */}
    </div>
  )
}

export default Loadingbar;