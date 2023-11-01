import { Body } from './body'
import { MiniProvider } from './context'
import { Days } from './days'
import { MiniHeader } from './header'
import { Container } from './styles'
import { MiniContext } from './types'

export const MiniCalendar = (props: MiniContext) => (
  <MiniProvider {...props}>
    <Container week={!!props.week}>
      <MiniHeader />
      <Days />
      <Body />
    </Container>
  </MiniProvider>
)
