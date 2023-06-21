import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
describe('Home page renders', () => {
  beforeEach(() => {
    render(<Home />)
  })
  test('Should render a Button with text Ir para Listagem', () => {
    const buttonElement = screen.getByRole('button', {
      name: 'Ir para Listagem',
    })

    expect(buttonElement).toBeInTheDocument()
  })
  test('Should render a Title with text Home', () => {
    const h1Element = screen.getByText('Home', {
      exact: true,
    })

    expect(h1Element).toBeInTheDocument()
  })
})
