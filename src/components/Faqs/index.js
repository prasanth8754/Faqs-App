import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    const copiedFaqs = [...faqsList].map(eachItem => ({
      ...eachItem,
      isOpened: false,
    }))

    this.state = {faqs: [...copiedFaqs]}
  }

  onToggleAnswer = id => {
    this.setState(prevState => ({
      faqs: [...prevState.faqs].map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isOpened: !eachItem.isOpened}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqs} = this.state

    return (
      <div className="bg-cont">
        <div className="container">
          <h1>FAQs</h1>
          <ul className="ul-cont">
            {faqs.map(eachItem => (
              <FaqItem
                faqDetails={eachItem}
                key={eachItem.id}
                onToggleAnswer={this.onToggleAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
