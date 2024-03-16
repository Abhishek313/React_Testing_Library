import {render,screen} from "@testing-library/react"
import App from "./App"

test("react test demo" , () => {
  render(<App/>)
  const textData = screen.getByText(/First React Test Case/i)
  expect(textData).toBeInTheDocument()

})

test("react test demo2" , () => {
  render(<App/>)
  const textData = screen.getByTitle(/Ai generated image/i)
  expect(textData).toBeInTheDocument()

})

// test("testing for input", () => {
//   render(<App/>)
//   let checkInput = screen.getByRole("textbox");
//   // let checkInputPlaceHolder = screen.getByPlaceholderText("Enter user name")
//   let checkInputAttribute = screen.toHaveAttribute("name","username")

//   // expect(checkInputPlaceHolder).toBeInTheDocument();
//   expect(checkInputAttribute).toBeInTheDocument()

  
// })

