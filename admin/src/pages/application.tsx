import React from 'react'
import Parcel from 'single-spa-react/parcel'

type Props = {}

const Application: React.FC<Props> = () => {
  // create a div after 1000 ms

  return (
    <div> 
      {/* @ts-ignore */}
      <Parcel config={() => System.import('@hydra/permissioned')} />
    </div>
  )
}

export default Application
