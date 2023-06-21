import { render, screen } from '@testing-library/react'
import { Title } from '@/components/Title/'

describe('Should render a h1 with all props passed', () => {
  test('Should render with text Test h1', () => {
    render(<Title text="Test h1" />)

    const h1Element = screen.getByText('Test h1', {
      exact: true,
    })

    expect(h1Element).toBeInTheDocument()
  })
})
