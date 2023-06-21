import { render, screen } from '@testing-library/react'
import Listagem from '@/app/Listagem/page'
describe('Listagem page renders', () => {
  test('Should render a Button with text Ir para Listagem', () => {
    render(<Listagem />)

    const buttonElement = screen.getByRole('button', {
      name: 'Ir para Home',
    })

    expect(buttonElement).toBeInTheDocument()
  })
})
