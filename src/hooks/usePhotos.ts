import { useEffect, useState } from 'react'

type Photo = {
  id: string
  url: string
}

async function getPhotos() {
  const res = await fetch(
    'https://api.unsplash.com/photos/?client_id=Rx4w7_kGuSRrPrvSuKPn1k3xvKelhz6BI7Qksv7yfI4'
  )
  const photos = await res.json()
  return photos
}

export function usePhotos() {
  const [photos, setPhotos] = useState<null | Photo[]>(null)

  useEffect(() => {
    async function getAndSetPhotos() {
      const photos = await getPhotos()
      const columnPhotos: any = [[], [], []]

      let pos = 0

      for (const i of photos) {
        columnPhotos[pos].push({ id: i.id, url: i.urls.regular })
        if (pos < 3) {
          pos += 1
        }
        if (pos === 3) {
          pos = 0
        }
      }
      setPhotos(columnPhotos)
    }

    getAndSetPhotos()
  }, [])

  return photos
}
