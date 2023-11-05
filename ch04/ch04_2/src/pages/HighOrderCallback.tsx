import {Title} from '../components'
import * as D from '../data'
import {useMemo, useCallback} from 'react'
import {Button} from '../theme/daisyui'

export default function HighOrderCallback() {
  const onClick = useCallback((name: string) => () => alert(`${name} clicked`), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn btn-primary normal-case btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  )
}
