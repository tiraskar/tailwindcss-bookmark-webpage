import React from 'react'
import {
  BookmarkManager,
  DownloadBoxes,
  DownloadHeading,
  FeatureHeading,
  FeatureTabs,
  Footer,
  HeadingFAQ,
  Navbar,
} from '../components'
import QuestionFAQ from '../components/QuestionFAQ'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <BookmarkManager />
      <FeatureHeading />
      <FeatureTabs />
      <DownloadHeading />
      <DownloadBoxes />
      <HeadingFAQ />
      <QuestionFAQ />
      <Footer />
    </div>
  )
}

export default Landing
