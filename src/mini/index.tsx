import { MiniProvider } from './context'
import { Container } from './styles'
import { MiniContext } from './types'

export const MiniCalendar = (props: MiniContext) => (
  <MiniProvider {...props}>
    <Container week={!!props.week}>
      {/* <Header />
      <Days />
      <Body /> */}
    </Container>
  </MiniProvider>
)
