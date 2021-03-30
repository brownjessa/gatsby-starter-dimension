import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
            Check out my <a href="https://drive.google.com/file/d/1-GbjH4CyK6d5OhDWAkQsjhxQNgRMbyUK/view?usp=sharing">Resume</a>.
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
										<li><a href="https://xd.adobe.com/view/31e9a0aa-23bf-46f0-80ba-1cdafdf45095-64ba/">Dark Theme</a></li>
										<li><a href="https://xd.adobe.com/view/31e9a0aa-23bf-46f0-80ba-1cdafdf45095-64ba/">Light Theme</a></li>
									</ul>
          </section>
          </header>

          <header className="major"> 
          <h2>Hierarchy User Flows</h2>
        <section>
          <ul className="alt">
										<li><a href="https://drive.google.com/file/d/1aCYT1qtywtGtIPlszj45kEUPBnLBGiD2/view?usp=sharing">Super Admin</a></li>
										<li><a href="https://drive.google.com/file/d/1dNG13jUipryqD3i5dEmJvkQH9RwGmqvN/view?usp=sharing">Admin</a></li>
                    <li><a href="https://drive.google.com/file/d/1Mxf---rD1xtY2dbSu7VUQ8JejYRFS0ji/view?usp=sharing">Standard Users</a></li>
									</ul>
          </section>
          </header>

          <header> 
          <h2>Cyber Data Viz</h2>
          <div className="content">
        <section>
          <ul className="alt">
										<li><a href="https://xd.adobe.com/view/f6859d87-9ab1-4572-9efa-f98264673a36-a3d6/">Mock</a></li>
										<li><a href="https://xd.adobe.com/view/b23fa9d3-90f0-4e05-96e2-b4f688a30be1-e76c/">Styling Guide</a></li>
                    <li><a href="https://xd.adobe.com/view/aa14890d-0c8c-4aaa-8601-8dbaa7ecc460-ff47/">Styling Edit</a></li>
									</ul>
          </section>
          </div>
          </header>

          <header> 
          <h2>3D--VR Design</h2>
        <section>
          <ul className="alt">
										<li><a href="https://hubs.mozilla.com/scenes/Hb96YHJ">Surrounded Lake VR Hub</a></li>
										<li><a href="https://drive.google.com/file/d/1fEbHqEP7v-Vhn7bjy0wqefB5VgmGFZ8b/view">2D/3D Webex Conference Room</a></li>
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
