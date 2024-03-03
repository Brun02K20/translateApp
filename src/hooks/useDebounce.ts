import { useEffect, useState } from "react"

// en la linea 4 lo que digo, es que el value va a ser del tipo, del tipo de dato que pase el usuario por parametro al debounce
export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value) // el debounce es un valor que espera un tiempo antes de ser cambiado 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

