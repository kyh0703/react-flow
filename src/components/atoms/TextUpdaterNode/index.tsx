import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

import Input from '../Input'

const handleStyle = { left: 10 }

function TextUpdaterNode() {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }, [])

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <Input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag"
          hasBorder
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  )
}

export default TextUpdaterNode
