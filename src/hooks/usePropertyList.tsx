import { useEffect, useState } from "react";
import { PropertyItem } from "../types/properties";
import { PropertyAPI } from "../api/properties";

export const usePropertyList = () => {

  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [fetching, setFetching] = useState(false);
  const limit = 4; // Fetch 4 items per batch
  const [properties, setProperties] = useState<PropertyItem[]>([])

  useEffect(() => {
    fetchFirstBatch();
  }, [])

  const fetchFirstBatch = () => {
    setProperties([]);
    PropertyAPI.getAllProperties(page, limit).then((d) => {
      setProperties(d.data)
      setHasNext(d.meta.hasNextPage)
      if (d.meta.hasNextPage) {
        setPage(p => p + 1)
      }
    }).catch(() => { })
  }

  const fetchNextBatch = () => {
    if (hasNext && !fetching) {
      setFetching(true);
      setTimeout(() => {
        PropertyAPI.getAllProperties(page, limit).then((d) => {
          setProperties(oldlist => [...oldlist, ...d.data])
          setHasNext(d.meta.hasNextPage)
          setFetching(false);
          if (d.meta.hasNextPage) {
            setPage(p => p + 1)
          }
        }).catch(() => { })
      }, 0)
    }
  }

  return {
    properties,
    fetchNextBatch,
    fetching
  }

}