import React from 'react'
import Link from 'gatsby-link'


export default({data}) => (
    <a href={data.url}>
        <i className={data.icon}></i> 
    </a>
)
