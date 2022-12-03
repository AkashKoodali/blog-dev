import React from 'react'
import Header from '../components/global/Header'


const HomePageLayout = (Component: any) => ({...props}) => {
  return (
    <>
    <Header/>
    <div>
        <Component {...props}/>
    </div>
    </>
  )
}

export default HomePageLayout