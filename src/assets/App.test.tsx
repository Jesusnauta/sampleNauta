import { render } from "react-dom";
import '@testing-library/dom'
import App from "../App"



describe('Given App', () => {
  describe('When ' () => {
  test('Then it should...', () => {
    render(<App></App>);
expect(screen.getByRole('heading')).toBeInTheDocument()
  })
 })
})

