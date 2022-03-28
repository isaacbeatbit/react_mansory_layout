import React from 'react'
import './Main.css'
import { usePhotos } from './hooks/usePhotos'

function PhotoItem({ src }: { src: string }) {
  return (
    <img
      sizes="(min-width: 1440px) 336px"
      srcSet={`${src} 1080w`}
      className="photoItem"
      alt="some"
    />
  )
}

function PhotoSkeleton() {
  return <div className="skeleton" />
}

function Loading({ photos }: { photos: boolean }) {
  const loadingItems = Array(10)
    .fill(1)
    .map((_, i) => i + 1)

  if (photos) return null

  return (
    <div className="loading-items">
      {loadingItems.map(i => (
        <PhotoSkeleton key={i} />
      ))}
    </div>
  )
}

function Photos({ photos }: { photos: any }) {
  if (!photos) return null

  return (
    <div className="photos">
      {photos.map((i: any[], idx: React.Key | null | undefined): any => (
        <div key={idx} className="columnPhotos">
          {i.map(({ id, url }: any) => (
            <PhotoItem key={id} src={url} />
          ))}
        </div>
      ))}
    </div>
  )
}

function Main() {
  const photos = usePhotos()

  return (
    <main className="container">
      <div className="content">
        <Loading photos={Boolean(photos)} />
        <Photos photos={photos} />
      </div>
    </main>
  )
}

export default Main
