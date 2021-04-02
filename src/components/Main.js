import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01v.jpg'
import pic02 from '../images/pic02v.jpg'
import pic03 from '../images/pic03v.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            An innovative and solution-focused UX/UI, Product Designer and fledgling front-end developer. 
            My passion is for technology and designing responsive 2D products as well as designing 3D enviornments 
            and products.
            Check out my <a href="#">Resume</a>.
          </p>
          <p>
            I enjoy photography and using Adobe suite to create mixed media art
            to sell as NFT's. I also design and create japanese tie-dye shirts with patches that signal an 
            Augmented Reality animation. Currently I am reading Creative Strategy and the Business of Design, 
            Powered By Design, Man's Search for Meaning, and The I Ching. I believe in living holistically, 
            the love of dogs, video games, and that small acts of kindness create peace globally.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          <header> 
          <h2>Member Dashboard</h2>
        <section>
          <ul className ="alt">
										<li><a href="#">Dark Theme</a></li>
										<li><a href="#">Light Theme</a></li>
									</ul>
          </section>
          </header>

          <header className="major"> 
          <h2>Hierarchy User Flows</h2>
        <section>
          <ul className="alt">
										<li><a href="#">Super Admin</a></li>
										<li><a href="#">Admin</a></li>
                    <li><a href="#">Standard Users</a></li>
									</ul>
          </section>
          </header>

          <header> 
          <h2>Cyber Data Viz</h2>
          <div className="content">
        <section>
          <ul className="alt">
										<li><a href="#">Mock</a></li>
										<li><a href="#">Styling Guide</a></li>
                    <li><a href="#">Styling Edit</a></li>
									</ul>
          </section>
          </div>
          </header>

          <header> 
          <h2>3D--VR Design</h2>
        <section>
          <ul className="alt">
										<li><a href="#">Surrounded Lake VR Hub</a></li>
										<li><a href="#">2D/3D Webex Conference Room</a></li>
									</ul>
                  <p>Please access via Desktop using Google Chrome</p>
          </section>
          </header>



          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          I enjoy photography and using Adobe suite to create mixed media art
            to sell as NFT's. I also design and create japanese tie-dye shirts with patches that signal an 
            Augmented Reality animation. Currently I am reading Creative Strategy and the Business of Design, 
            Powered By Design, Man's Search for Meaning, and The I Ching. I believe in living holistically, 
            the love of dogs, video games, and that small acts of kindness create peace globally.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jessrawrmine"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://git" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li> */}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
