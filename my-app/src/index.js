import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image, Item } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTYwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTU5Ljk4NSAxMy4zNTM1SDE1NS45MTZWMjkuMTM5NEgxNTkuOTg1VjEzLjM1MzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTU5Ljk4NSA1Ljc5NzM2SDE1NS45MTZWMTAuMDgwM0gxNTkuOTg1VjUuNzk3MzZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTUxLjY5NCA2LjAxMTcyVjkuNzEzNDRIMTQxLjI5M1YxNi4xNjg1SDE1MC4xNjRWMTkuODcwMkgxNDEuMjkzVjI5LjEzOThIMTM3LjA3MVY2LjAxMTcySDE1MS42OTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTI1LjcyMSAxOS41NjQzTDEzMy4yNDcgMjkuMTM5OEgxMjguMzIxTDEyMi45OTggMjIuMzc4OEwxMjEuMzc3IDI0LjA2MTRWMjkuMTcwNEgxMTcuMzA4VjUuOTE5OTJIMTIxLjM3N1YxOC45NTI0TDEyNy41MjYgMTIuNDk3NEgxMzIuNDUyTDEyNS43MjEgMTkuNTY0M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMTIuNDEzIDI0LjY0MjRMMTEzLjYwNiAyOC4wNjg4QzExMS43NyAyOS4xMzk1IDEwOS44MTIgMjkuNjU5NiAxMDcuNjQgMjkuNjU5NkMxMDQuOTE4IDI5LjYyOSAxMDIuODA3IDI4LjgzMzYgMTAxLjM2OSAyNy4yNDI4Qzk5LjkzMSAyNS42NTE5IDk5LjE5NjggMjMuNDE4NyA5OS4xOTY4IDIwLjU3MzVDOTkuMTk2OCAxNy43NTkgOTkuOTMxIDE1LjU4NjkgMTAxLjM2OSAxMy45OTYxQzEwMi44MDcgMTIuNDA1MyAxMDQuOTE4IDExLjYwOTkgMTA3LjY0IDExLjYwOTlDMTA4LjYxOSAxMS42MDk5IDEwOS40NDUgMTEuNjcxIDExMC4xNDkgMTEuNzkzNEMxMTAuODUzIDExLjkxNTggMTExLjU4NyAxMi4xMjk5IDExMi4zMjEgMTIuNDM1OVYxNi4yNkMxMTEuNTg3IDE1Ljg5MjggMTEwLjg1MyAxNS42NDgxIDExMC4yMSAxNS40OTUxQzEwOS41MzcgMTUuMzQyMiAxMDguODMzIDE1LjI4MSAxMDguMDM4IDE1LjI4MUMxMDQuOTQ4IDE1LjMxMTYgMTAzLjQxOSAxNy4wNTU0IDEwMy40MTkgMjAuNTQyOUMxMDMuNDE5IDI0LjE1MjkgMTA0LjkxOCAyNS45NTc5IDEwNy45NDYgMjUuOTU3OUMxMDkuNDE1IDI1Ljk1NzkgMTEwLjg4MyAyNS41Mjk2IDExMi40MTMgMjQuNjQyNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik05NC44ODM0IDE2LjAxNUM5NS41MjU4IDE3LjM5MTcgOTUuODYyMyAxOC44OTA4IDk1Ljg2MjMgMjAuNjA0Qzk1Ljg2MjMgMjIuMzE3MiA5NS41MjU4IDIzLjg0NjggOTQuODgzNCAyNS4yMjM1Qzk0LjI0MDkgMjYuNjAwMSA5My4yMzE0IDI3LjY3MDkgOTEuOTQ2NSAyOC40NjYzQzkwLjYzMSAyOS4yNjE3IDg5LjA0MDIgMjkuNjU5NCA4Ny4yMDQ2IDI5LjY1OTRDODUuMzA3OCAyOS42NTk0IDgzLjcxNyAyOS4yNjE3IDgyLjQwMTUgMjguNDY2M0M4MS4wODYxIDI3LjY3MDkgODAuMTA3MSAyNi42MDAxIDc5LjQzNCAyNS4yMjM1Qzc4Ljc2MSAyMy44NDY4IDc4LjQ1NTEgMjIuMzE3MiA3OC40NTUxIDIwLjYwNEM3OC40NTUxIDE4LjkyMTQgNzguNzkxNiAxNy4zOTE3IDc5LjQzNCAxNi4wMTVDODAuMTA3MSAxNC42Mzg0IDgxLjA4NjEgMTMuNTY3NiA4Mi40MDE1IDEyLjc3MjJDODMuNzE3IDExLjk3NjggODUuMzA3OCAxMS41NzkxIDg3LjIwNDYgMTEuNTc5MUM4OS4wNzA4IDExLjU3OTEgOTAuNjYxNiAxMS45NzY4IDkxLjk0NjUgMTIuNzcyMkM5My4yMzE0IDEzLjU2NzYgOTQuMjQwOSAxNC42Mzg0IDk0Ljg4MzQgMTYuMDE1Wk05MS42NzExIDIwLjYwNEM5MS42NzExIDE4LjkyMTQgOTEuMjczNCAxNy41NzUzIDkwLjUwODYgMTYuNTk2M0M4OS43NDM4IDE1LjYxNzMgODguNjQyNSAxNS4xMjc5IDg3LjIwNDYgMTUuMTI3OUM4NS43MzYxIDE1LjEyNzkgODQuNjM0OCAxNS42MTczIDgzLjgzOTQgMTYuNTk2M0M4My4wNzQ2IDE3LjU3NTMgODIuNjc2OSAxOC44OTA4IDgyLjY3NjkgMjAuNjA0QzgyLjY3NjkgMjIuMzE3MiA4My4wNzQ2IDIzLjYzMjYgODMuODM5NCAyNC42MTE2Qzg0LjYwNDIgMjUuNTkwNiA4NS43MzYxIDI2LjA4MDEgODcuMjA0NiAyNi4wODAxQzg4LjY0MjUgMjYuMDgwMSA4OS43NDM4IDI1LjU5MDYgOTAuNTA4NiAyNC42MTE2QzkxLjI3MzQgMjMuNjMyNiA5MS42NzExIDIyLjI4NjYgOTEuNjcxMSAyMC42MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzUuNzkzNCAyNS42ODI3VjI5LjIzMTRDNzQuODQ1IDI5LjQ0NTYgNzMuOTU3OCAyOS41Njc5IDczLjE5MyAyOS41Njc5QzcxLjUxMDQgMjkuNTM3MyA3MC4yODY3IDI5LjIwMDggNjkuNTIxOSAyOC40OTcyQzY4Ljc1NzEgMjcuNzkzNiA2OC4zNTk0IDI2LjcyMjggNjguMzU5NCAyNS4yNTQ0VjUuODg5MTZINzIuNDI4MlYyMy45MDgzQzcyLjQyODIgMjQuNjQyNSA3Mi41NTA2IDI1LjE2MjYgNzIuNzk1MyAyNS40Mzc5QzczLjA0MDEgMjUuNzEzMyA3My40Njg0IDI1Ljg2NjIgNzQuMTEwOCAyNS44NjYyQzc0Ljc1MzMgMjUuODY2MiA3NS4zMDM5IDI1LjgwNSA3NS43OTM0IDI1LjY4MjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjIuNTc3NCAxOS40MTEzQzYzLjMxMTYgMjAuMzI5MSA2My42NDgxIDIxLjQzMDUgNjMuNjQ4MSAyMi43NzY1QzYzLjY0ODEgMjQuOTE4IDYyLjk3NTEgMjYuNTA4OSA2MS42NTk2IDI3LjU3OTZDNjAuMzQ0MSAyOC42NTAzIDU4LjExMDkgMjkuMTM5OCA1NC45OTA0IDI5LjEzOThINDYuMTc5N1Y2LjAxMTcySDU0Ljk5MDRDNTcuODA0OSA2LjAxMTcyIDU5Ljc5MzUgNi41MzE3OSA2MC45ODY2IDcuNTcxOTVDNjIuMTc5NyA4LjYxMjEgNjIuNzYwOSAxMC4xNDE3IDYyLjc2MDkgMTIuMjIyQzYyLjc2MDkgMTMuNDc2MyA2Mi41MTYyIDE0LjUxNjUgNjEuOTk2MSAxNS4zNzMxQzYxLjQ3NjEgMTYuMjI5NyA2MC42NSAxNi45MDI3IDU5LjU0ODcgMTcuMzkyMkM2MC44MzM2IDE3LjgyMDUgNjEuODQzMiAxOC40OTM2IDYyLjU3NzQgMTkuNDExM1pNNTguMzg2MiAyNC45NDg2QzU5LjA1OTIgMjQuNDI4NSA1OS4zNjUyIDIzLjYwMjUgNTkuMzY1MiAyMi40NzA2QzU5LjM2NTIgMjEuMzM4NyA1OC45OTggMjAuNTQzMyA1OC4yNjM4IDIwLjAyMzJDNTcuNTI5NiAxOS41MDMxIDU2LjQyODMgMTkuMjU4NCA1NC45OTA0IDE5LjI1ODRINTAuNDAxNVYyNS43MTM0SDU0Ljk5MDRDNTYuNTgxMiAyNS43MTM0IDU3LjcxMzEgMjUuNDY4NyA1OC4zODYyIDI0Ljk0ODZaTTU4LjQ0NzQgMTIuNTU4NkM1OC40NDc0IDExLjQyNjYgNTguMTcyIDEwLjYzMTIgNTcuNjUyIDEwLjE0MTdDNTcuMTMxOSA5LjY1MjI1IDU2LjI0NDcgOS40MDc1MSA1NC45OTA0IDkuNDA3NTFINTAuNDAxNVYxNS44MzJINTQuOTkwNEM1Ny4yODQ5IDE1LjgzMiA1OC40NDc0IDE0LjczMDYgNTguNDQ3NCAxMi41NTg2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMzLjMwMDIgMTIuNTI3N0MzNi4xNzU5IDE1LjQwMzQgMzYuMTc1OSAyMC4wNTM1IDMzLjMwMDIgMjIuODk4N0wyMi45MjkzIDMzLjMwMDJDMjAuMDUzNSAzNi4xNzU5IDE1LjQwMzQgMzYuMTc1OSAxMi41NTgzIDMzLjMwMDJMMi4xNTY3OSAyMi45MjkzQy0wLjcxODkyOSAyMC4wNTM1IC0wLjcxODkyOSAxNS40MDM0IDIuMTU2NzkgMTIuNTU4M0wxMi41Mjc3IDIuMTU2NzlDMTUuNDAzNCAtMC43MTg5MjkgMjAuMDUzNSAtMC43MTg5MjkgMjIuOTI5MyAyLjE1Njc5TDMzLjMwMDIgMTIuNTI3N1pNMjUuNTI5NiAyMC4zMjg5QzI2Ljk2NzUgMTguODkxIDI2Ljk2NzUgMTYuNTY2IDI1LjUyOTYgMTUuMTI4MUwyMC4zMjg5IDkuOTI3MzRDMTguODkxIDguNDg5NDggMTYuNTY2IDguNDg5NDggMTUuMTI4MSA5LjkyNzM0TDkuOTI3MzQgMTUuMTI4MUM4LjQ4OTQ4IDE2LjU2NiA4LjQ4OTQ4IDE4Ljg5MSA5LjkyNzM0IDIwLjMyODlMMTUuMTI4MSAyNS41Mjk2QzE2LjU2NiAyNi45Njc1IDE4Ljg5MSAyNi45Njc1IDIwLjMyODkgMjUuNTI5NkwyNS41Mjk2IDIwLjMyODlaIiBmaWxsPSIjMDA0QkVGIi8+Cjwvc3ZnPgo='
                floated='left'/>

            <Dropdown text='Products'>
              <Dropdown.Menu>
                <Dropdown.Item text='Wallet'/>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown text='Institutions'>
              <Dropdown.Menu>
                <Dropdown.Item text='Wallet'/>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown text='Services'>
              <Dropdown.Menu>
                <Dropdown.Item text='Wallet'/>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown text='Resources'>
              <Dropdown.Menu>
                <Dropdown.Item text='Wallet'/>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item position='right'
                       name='Home'
                       active={activeItem === 'Home'}
                       onClick={this.handleItemClick}
            >
              Company
            </Menu.Item>

            <Menu.Item position='right'
                       name='Home'
                       active={activeItem === 'Home'}
                       onClick={this.handleItemClick}
            >
              Credit Card
            </Menu.Item>

            <Container textAlign='right'>
              <button className="ui button">Login</button>
              <button className="ui button">Get Started</button>



            </Container>
          </Container>
        </Menu>
    );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/experience-islandsnow-logo.png'
               centered/>

    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Container textAlign='center'>
          <Dropdown text='Men' className='midmenuitem'>
            <Dropdown.Menu>
              <Dropdown.Item text='New'/>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Women' className='midmenuitem'>
            <Dropdown.Menu>
              <Dropdown.Item text='New'/>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Kids' className='midmenuitem'>
            <Dropdown.Menu>
              <Dropdown.Item text='New'/>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Brands' className='midmenuitem'>
            <Dropdown.Menu>
              <Dropdown.Item text='New'/>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Sale' className='midmenuitem'>
            <Dropdown.Menu>
              <Dropdown.Item text='New'/>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image
            src='https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/experience-islandsnow-video-snapshot.png'
            centered/>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="ui three column grid container">
          <div className="column">
            <div className="ui list">
              <div className="item">About Us</div>
              <div className="item">Store Locations</div>
              <div className="item">Employment</div>
              <div className="item">Videos</div>
              <div className="item">Shipping</div>
              <div className="item">Terms</div>
              <div className="item">Privacy</div>
            </div>
          </div>

          <div className="column">
            <div className="ui list">
              <div className="item">Men</div>
              <div className="item">Women</div>
              <div className="item">Kids</div>
              <div className="item">Brands</div>
              <div className="item">Sale</div>
            </div>
          </div>

          <div className="column">
            <div className="ui list">
              <div className="item">Join our mailing list for updates</div>
              <div className="item">Sign up to receive our email updates!</div>
              <Input action={{ icon: 'mail' }} placeholder='Enter Email Address' size='mini'/>

            </div>
          </div>

        </div>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
