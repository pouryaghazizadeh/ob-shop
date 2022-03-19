import {render,screen} from "@testing-library/react"
import App from "./App"


test('render app component',async () => {
    render(<App/>)
    const linkElement = screen.getAllByAltText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
    
})
