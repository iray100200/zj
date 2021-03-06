import React from 'react'
import Pagination from 'rc-pagination'

import 'rc-pagination/assets/index.css'

export default function (props) {
  return (
    <div style={{ margin: '20px auto 0', textAlign: 'center' }}>
      <Pagination pageSize={20} {...props} />
    </div>
  )
}