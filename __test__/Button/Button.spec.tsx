import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button/'

describe('Should render a button with all props passed', () => {
  test('Should render with text Test button', () => {
    render(<Button text="Test button" />)

    const buttonElement = screen.getByRole('button', {
      name: 'Test button',
    })

    expect(buttonElement).toBeInTheDocument()
  })
})
