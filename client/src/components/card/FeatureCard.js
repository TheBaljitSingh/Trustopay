import React from 'react'

export default function FeatureCard({img, title, desc}) {
  return (
        <div className="flex flex-col items-start text-sm p-12">
          <div className="mb-4">
         
            <img className=' ' height={58} width={58} src={img} alt="" />
            
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>

        

  )
}

