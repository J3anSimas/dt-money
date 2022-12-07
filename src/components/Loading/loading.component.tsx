import { LoadingContainer } from './loading.styles'
import { CircleNotch } from 'phosphor-react'
export default function Loading({ size }: { size?: number }): JSX.Element {
  return (
    <LoadingContainer className="loading-container">
      <CircleNotch size={size ?? 32} className="load-image" />
    </LoadingContainer>
  )
}
