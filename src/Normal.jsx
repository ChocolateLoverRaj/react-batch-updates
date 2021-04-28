import React, { useState, useEffect } from 'react'

const resolvedPromise = Promise.resolve()

const Normal = () => {
  const [output, setOutput] = useState('')

  const [a, setA] = useState(2)
  const [b, setB] = useState(0)

  useEffect(() => {
    let canceled = false

    resolvedPromise.finally(() => {
      setOutput(output => output + '\n' + `${a} ${b} ${canceled}`)
      if (canceled) return
      if (a > 0) {
        setA(a - 1)
        setB(b + 1)
      }
    })

    return () => {
      canceled = true
    }
  }, [a, b])

  return <pre>{output}</pre>
}

export default Normal
