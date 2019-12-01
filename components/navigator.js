import React from 'react'

export default function Navigator(props) {
  const { breadcrumb, title } = props
  return (
    <div className="leftMenu fl">
      <dl>
        <dt>
          <span>
            <h4>{title}</h4>
          </span>
        </dt>
        {
          breadcrumb.map((obj, index) => {
            return <dd key={index} className="on">
              <a>{obj.text}</a>
            </dd>
          })
        }
      </dl>
    </div>
  )
}