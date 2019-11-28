import React, { FunctionComponent } from 'react'

import { Loading } from 'vtex.render-runtime'

import { useItemContext } from './components/ItemContext'
import { opaque } from './utils/opaque'

const ProductBrand: FunctionComponent = () => {
  const { item, loading } = useItemContext()

  if (loading) {
    return <Loading />
  }

  return (
    <div
      id={`brand-name-${item.id}`}
      className={`ttu f7 fw6 c-muted-1 fw5-m ${opaque(
        item.availability || undefined
      )}`}
    >
      {item.additionalInfo && item.additionalInfo.brandName}
    </div>
  )
}

export default ProductBrand
