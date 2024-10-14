
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/layout';
import IgStoryDownloader from './component/ig-story-downloader';
import IgAvatarViewer from './component/ig-avatar-viewer';
import PicukiViewer from './component/picuki-viewer';
import InflactViewer from './component/inflact-viewer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IgStoryDownloader />} />
          <Route path="ig-avatar-viewer" element={< IgAvatarViewer />} />
          <Route path="picuki-viwer" element={<PicukiViewer />} />
          <Route path="inflact-viewer" element={<InflactViewer  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}   

export default App