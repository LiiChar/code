import { IWeather } from "@/type/WeatherType"

const cache: any= {}
let cacheTimer = 0

export default async function fetchWithCache(cityName: string, time: number = 10000, action: (params: any) => any) {
  const now = new Date().getTime()
  if (!cache[cityName] || cache[cityName].cacheTimer < now) {
    cache[cityName] = await action(cityName)
    cache[cityName].cacheTimer = getCacheTimer(time)
  }
  return cache[cityName]
}

function getCacheTimer(time: number) {
    const now = new Date().getTime()
    if (cacheTimer < now + time) {
      cacheTimer = now + time
    }
    return cacheTimer
  }