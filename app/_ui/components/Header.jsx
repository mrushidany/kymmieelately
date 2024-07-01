'use client'

import { Helmet } from "react-helmet"

export default function Header({ title, description }) {
  return (
    <>
        <Helmet>
          <title>{title}</title>
          <meta description={description} />
        </Helmet>
    </>
  )
}
