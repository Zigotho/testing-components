import { List } from '@/components/List/'
import { render, screen } from '@testing-library/react'

describe('Should render a List with all props passed', () => {
  test('Should render all elements in renderList props', () => {
    const listToRender = ['primeiro', 'segundo']
    render(<List renderList={listToRender} />)

    const listaElement = screen.getByRole('list')
    expect(listaElement).toBeInTheDocument()

    const itemElements = screen.getAllByRole('listitem')
    expect(itemElements.length).toBe(listToRender.length)

    const itemTexts = itemElements.map((item) => item.textContent)
    expect(itemTexts).toEqual(listToRender)
  })
})
