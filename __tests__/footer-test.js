import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Footer from '../js/footer'

describe("Footer", () => {
  let footerComponent = {}

  beforeEach(()=>{
    footerComponent = TestUtils.renderIntoDocument(<Footer />)
  })

  it("Should have the components for the footer", () => {
    const footerElement = TestUtils.findRenderedDOMComponentWithClass(
      footerComponent,
      "site_footer"
    )

    expect(footerElement).toBeDefined()
  })
})
