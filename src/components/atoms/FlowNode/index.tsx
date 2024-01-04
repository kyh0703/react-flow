import { useCallback, useState } from 'react'
import ReactFlow, {
  Background,
  Connection,
  Controls,
  EdgeChange,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Position,
  Handle,
} from 'reactflow'
import 'reactflow/dist/style.css'
import tw from 'twin.macro'

import Input from '@/components/atoms/Input'

const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const TextUpdaterNode = () => {
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
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  )
}

const nodeTypes = { textUpdater: TextUpdaterNode }

const FlowNode = () => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState([])

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((node) => applyNodeChanges(changes, node)),
    [setNodes],
  )

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edge) => applyEdgeChanges(changes, edge)),
    [setEdges],
  )
  const handleConnect = useCallback(
    (connection: Connection) => setEdges((edge) => addEdge(connection, edge)),
    [setEdges],
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={handleNodesChange}
      onEdgesChange={handleEdgesChange}
      onConnect={handleConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  )
}

export default FlowNode
