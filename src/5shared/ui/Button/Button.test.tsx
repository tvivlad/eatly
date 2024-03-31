import { render, screen } from '@testing-library/react'
import { Button, buttonType } from './index'

describe('Button work correctly', () => {
  test('with empty children', () => {
    render(
      <Button
        btWidth={'116px'}
        btHeight={'60px'}
        btType={buttonType.outlined}
      ></Button>
    )
    expect(screen.getByText('push')).toBeInTheDocument()
  })

  test('with apropriate className', () => {
    render(
      <Button btWidth={'116px'} btHeight={'60px'} btType={buttonType.outlined}>
        Click
      </Button>
    )
    expect(screen.getByText('Click')).toHaveClass('outlinedBtn')
  })
})
