import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image, Item, Menu, Icon, Grid, Dropdown, Container, Header, Button, Input } from 'semantic-ui-react'

class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTYwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTU5Ljk4NSAxMy4zNTM1SDE1NS45MTZWMjkuMTM5NEgxNTkuOTg1VjEzLjM1MzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTU5Ljk4NSA1Ljc5NzM2SDE1NS45MTZWMTAuMDgwM0gxNTkuOTg1VjUuNzk3MzZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTUxLjY5NCA2LjAxMTcyVjkuNzEzNDRIMTQxLjI5M1YxNi4xNjg1SDE1MC4xNjRWMTkuODcwMkgxNDEuMjkzVjI5LjEzOThIMTM3LjA3MVY2LjAxMTcySDE1MS42OTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTI1LjcyMSAxOS41NjQzTDEzMy4yNDcgMjkuMTM5OEgxMjguMzIxTDEyMi45OTggMjIuMzc4OEwxMjEuMzc3IDI0LjA2MTRWMjkuMTcwNEgxMTcuMzA4VjUuOTE5OTJIMTIxLjM3N1YxOC45NTI0TDEyNy41MjYgMTIuNDk3NEgxMzIuNDUyTDEyNS43MjEgMTkuNTY0M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMTIuNDEzIDI0LjY0MjRMMTEzLjYwNiAyOC4wNjg4QzExMS43NyAyOS4xMzk1IDEwOS44MTIgMjkuNjU5NiAxMDcuNjQgMjkuNjU5NkMxMDQuOTE4IDI5LjYyOSAxMDIuODA3IDI4LjgzMzYgMTAxLjM2OSAyNy4yNDI4Qzk5LjkzMSAyNS42NTE5IDk5LjE5NjggMjMuNDE4NyA5OS4xOTY4IDIwLjU3MzVDOTkuMTk2OCAxNy43NTkgOTkuOTMxIDE1LjU4NjkgMTAxLjM2OSAxMy45OTYxQzEwMi44MDcgMTIuNDA1MyAxMDQuOTE4IDExLjYwOTkgMTA3LjY0IDExLjYwOTlDMTA4LjYxOSAxMS42MDk5IDEwOS40NDUgMTEuNjcxIDExMC4xNDkgMTEuNzkzNEMxMTAuODUzIDExLjkxNTggMTExLjU4NyAxMi4xMjk5IDExMi4zMjEgMTIuNDM1OVYxNi4yNkMxMTEuNTg3IDE1Ljg5MjggMTEwLjg1MyAxNS42NDgxIDExMC4yMSAxNS40OTUxQzEwOS41MzcgMTUuMzQyMiAxMDguODMzIDE1LjI4MSAxMDguMDM4IDE1LjI4MUMxMDQuOTQ4IDE1LjMxMTYgMTAzLjQxOSAxNy4wNTU0IDEwMy40MTkgMjAuNTQyOUMxMDMuNDE5IDI0LjE1MjkgMTA0LjkxOCAyNS45NTc5IDEwNy45NDYgMjUuOTU3OUMxMDkuNDE1IDI1Ljk1NzkgMTEwLjg4MyAyNS41Mjk2IDExMi40MTMgMjQuNjQyNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik05NC44ODM0IDE2LjAxNUM5NS41MjU4IDE3LjM5MTcgOTUuODYyMyAxOC44OTA4IDk1Ljg2MjMgMjAuNjA0Qzk1Ljg2MjMgMjIuMzE3MiA5NS41MjU4IDIzLjg0NjggOTQuODgzNCAyNS4yMjM1Qzk0LjI0MDkgMjYuNjAwMSA5My4yMzE0IDI3LjY3MDkgOTEuOTQ2NSAyOC40NjYzQzkwLjYzMSAyOS4yNjE3IDg5LjA0MDIgMjkuNjU5NCA4Ny4yMDQ2IDI5LjY1OTRDODUuMzA3OCAyOS42NTk0IDgzLjcxNyAyOS4yNjE3IDgyLjQwMTUgMjguNDY2M0M4MS4wODYxIDI3LjY3MDkgODAuMTA3MSAyNi42MDAxIDc5LjQzNCAyNS4yMjM1Qzc4Ljc2MSAyMy44NDY4IDc4LjQ1NTEgMjIuMzE3MiA3OC40NTUxIDIwLjYwNEM3OC40NTUxIDE4LjkyMTQgNzguNzkxNiAxNy4zOTE3IDc5LjQzNCAxNi4wMTVDODAuMTA3MSAxNC42Mzg0IDgxLjA4NjEgMTMuNTY3NiA4Mi40MDE1IDEyLjc3MjJDODMuNzE3IDExLjk3NjggODUuMzA3OCAxMS41NzkxIDg3LjIwNDYgMTEuNTc5MUM4OS4wNzA4IDExLjU3OTEgOTAuNjYxNiAxMS45NzY4IDkxLjk0NjUgMTIuNzcyMkM5My4yMzE0IDEzLjU2NzYgOTQuMjQwOSAxNC42Mzg0IDk0Ljg4MzQgMTYuMDE1Wk05MS42NzExIDIwLjYwNEM5MS42NzExIDE4LjkyMTQgOTEuMjczNCAxNy41NzUzIDkwLjUwODYgMTYuNTk2M0M4OS43NDM4IDE1LjYxNzMgODguNjQyNSAxNS4xMjc5IDg3LjIwNDYgMTUuMTI3OUM4NS43MzYxIDE1LjEyNzkgODQuNjM0OCAxNS42MTczIDgzLjgzOTQgMTYuNTk2M0M4My4wNzQ2IDE3LjU3NTMgODIuNjc2OSAxOC44OTA4IDgyLjY3NjkgMjAuNjA0QzgyLjY3NjkgMjIuMzE3MiA4My4wNzQ2IDIzLjYzMjYgODMuODM5NCAyNC42MTE2Qzg0LjYwNDIgMjUuNTkwNiA4NS43MzYxIDI2LjA4MDEgODcuMjA0NiAyNi4wODAxQzg4LjY0MjUgMjYuMDgwMSA4OS43NDM4IDI1LjU5MDYgOTAuNTA4NiAyNC42MTE2QzkxLjI3MzQgMjMuNjMyNiA5MS42NzExIDIyLjI4NjYgOTEuNjcxMSAyMC42MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzUuNzkzNCAyNS42ODI3VjI5LjIzMTRDNzQuODQ1IDI5LjQ0NTYgNzMuOTU3OCAyOS41Njc5IDczLjE5MyAyOS41Njc5QzcxLjUxMDQgMjkuNTM3MyA3MC4yODY3IDI5LjIwMDggNjkuNTIxOSAyOC40OTcyQzY4Ljc1NzEgMjcuNzkzNiA2OC4zNTk0IDI2LjcyMjggNjguMzU5NCAyNS4yNTQ0VjUuODg5MTZINzIuNDI4MlYyMy45MDgzQzcyLjQyODIgMjQuNjQyNSA3Mi41NTA2IDI1LjE2MjYgNzIuNzk1MyAyNS40Mzc5QzczLjA0MDEgMjUuNzEzMyA3My40Njg0IDI1Ljg2NjIgNzQuMTEwOCAyNS44NjYyQzc0Ljc1MzMgMjUuODY2MiA3NS4zMDM5IDI1LjgwNSA3NS43OTM0IDI1LjY4MjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjIuNTc3NCAxOS40MTEzQzYzLjMxMTYgMjAuMzI5MSA2My42NDgxIDIxLjQzMDUgNjMuNjQ4MSAyMi43NzY1QzYzLjY0ODEgMjQuOTE4IDYyLjk3NTEgMjYuNTA4OSA2MS42NTk2IDI3LjU3OTZDNjAuMzQ0MSAyOC42NTAzIDU4LjExMDkgMjkuMTM5OCA1NC45OTA0IDI5LjEzOThINDYuMTc5N1Y2LjAxMTcySDU0Ljk5MDRDNTcuODA0OSA2LjAxMTcyIDU5Ljc5MzUgNi41MzE3OSA2MC45ODY2IDcuNTcxOTVDNjIuMTc5NyA4LjYxMjEgNjIuNzYwOSAxMC4xNDE3IDYyLjc2MDkgMTIuMjIyQzYyLjc2MDkgMTMuNDc2MyA2Mi41MTYyIDE0LjUxNjUgNjEuOTk2MSAxNS4zNzMxQzYxLjQ3NjEgMTYuMjI5NyA2MC42NSAxNi45MDI3IDU5LjU0ODcgMTcuMzkyMkM2MC44MzM2IDE3LjgyMDUgNjEuODQzMiAxOC40OTM2IDYyLjU3NzQgMTkuNDExM1pNNTguMzg2MiAyNC45NDg2QzU5LjA1OTIgMjQuNDI4NSA1OS4zNjUyIDIzLjYwMjUgNTkuMzY1MiAyMi40NzA2QzU5LjM2NTIgMjEuMzM4NyA1OC45OTggMjAuNTQzMyA1OC4yNjM4IDIwLjAyMzJDNTcuNTI5NiAxOS41MDMxIDU2LjQyODMgMTkuMjU4NCA1NC45OTA0IDE5LjI1ODRINTAuNDAxNVYyNS43MTM0SDU0Ljk5MDRDNTYuNTgxMiAyNS43MTM0IDU3LjcxMzEgMjUuNDY4NyA1OC4zODYyIDI0Ljk0ODZaTTU4LjQ0NzQgMTIuNTU4NkM1OC40NDc0IDExLjQyNjYgNTguMTcyIDEwLjYzMTIgNTcuNjUyIDEwLjE0MTdDNTcuMTMxOSA5LjY1MjI1IDU2LjI0NDcgOS40MDc1MSA1NC45OTA0IDkuNDA3NTFINTAuNDAxNVYxNS44MzJINTQuOTkwNEM1Ny4yODQ5IDE1LjgzMiA1OC40NDc0IDE0LjczMDYgNTguNDQ3NCAxMi41NTg2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMzLjMwMDIgMTIuNTI3N0MzNi4xNzU5IDE1LjQwMzQgMzYuMTc1OSAyMC4wNTM1IDMzLjMwMDIgMjIuODk4N0wyMi45MjkzIDMzLjMwMDJDMjAuMDUzNSAzNi4xNzU5IDE1LjQwMzQgMzYuMTc1OSAxMi41NTgzIDMzLjMwMDJMMi4xNTY3OSAyMi45MjkzQy0wLjcxODkyOSAyMC4wNTM1IC0wLjcxODkyOSAxNS40MDM0IDIuMTU2NzkgMTIuNTU4M0wxMi41Mjc3IDIuMTU2NzlDMTUuNDAzNCAtMC43MTg5MjkgMjAuMDUzNSAtMC43MTg5MjkgMjIuOTI5MyAyLjE1Njc5TDMzLjMwMDIgMTIuNTI3N1pNMjUuNTI5NiAyMC4zMjg5QzI2Ljk2NzUgMTguODkxIDI2Ljk2NzUgMTYuNTY2IDI1LjUyOTYgMTUuMTI4MUwyMC4zMjg5IDkuOTI3MzRDMTguODkxIDguNDg5NDggMTYuNTY2IDguNDg5NDggMTUuMTI4MSA5LjkyNzM0TDkuOTI3MzQgMTUuMTI4MUM4LjQ4OTQ4IDE2LjU2NiA4LjQ4OTQ4IDE4Ljg5MSA5LjkyNzM0IDIwLjMyODlMMTUuMTI4MSAyNS41Mjk2QzE2LjU2NiAyNi45Njc1IDE4Ljg5MSAyNi45Njc1IDIwLjMyODkgMjUuNTI5NkwyNS41Mjk2IDIwLjMyODlaIiBmaWxsPSIjMDA0QkVGIi8+Cjwvc3ZnPgo='
                floated='left'/></Menu.Item>

            <Dropdown item text='Products'>
              <Dropdown.Menu>
                <Dropdown.Item>Rates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Institutions'>
              <Dropdown.Menu>
                <Dropdown.Item>Rates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Services'>
              <Dropdown.Menu>
                <Dropdown.Item>Rates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Resources">
              <Dropdown.Menu>
                <Dropdown.Item>Rates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            <Menu.Item>Company</Menu.Item>
            <Menu.Item>Credit Card</Menu.Item>

            <Menu.Item position='right' style={{color: 'rgb(0, 50, 235)'}}>Login</Menu.Item>
            <Menu.Item><Button floated='left' className='ui button font type-blue'>Get Started</Button></Menu.Item>

          </Container>
        </Menu>
    );
  }
}

class MidPage extends React.Component {
  render() {
    return (

        <Container className='ui header'>
          <Grid centered divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>

                <Header as='h1' style={{ fontSize: '70px', paddingTop: '80px' }}>Buy, sell, and earn crypto</Header>
                <Header as='h2' style={{ fontSize: '15px' }}>The BlockFi Rewards Credit Card lets you earn up to 3.5%* back in crypto on
                  every purchase</Header>

                <Button className='ui button font type-blue'>Get Started</Button>

                <Header as='h1' style={{ fontSize: '12px' }}>*3.5% is an introductory offer that spans the first 90 days of card
                  ownership, beginning on the date of card activation. The introductory offer is capped at $100 dollars
                  in
                  bitcoin.</Header>
              </Grid.Column>

              <Grid.Column>
                <Image
                    src='https://images.ctfassets.net/d890uw7wrbwb/3auoqIvXyfLwWMhJuoglnc/a1acda8f7c34a7b5effc698305a106ca/header-wallet_2.png'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className='cardpage'>
          <Container>
            <Grid centered divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>

                  <Image
                      src='https://images.ctfassets.net/d890uw7wrbwb/1hqrUVj664rVFtjpd2zsZL/8184769d10bcf52d1ce4da1b663d0c00/Homepage-Card.png'
                      floated='left'/>

                </Grid.Column>

                <Grid.Column>
                  <Header as='h1' style={{ fontSize: '56px' }}>*Over $15 million in crypto paid in rewards to date and no annual fees**</Header>

                  <Header as='h2' style={{ fontSize: '22px' }}>Earn rewards in Bitcoin, Ethereum, and more with the BlockFi Rewards Credit Card. See
                    if
                    you’re approved with no impact to your credit.***</Header>
                  <Button floated='left' className='ui button font type-blue'>Get Your Card</Button>
                  <Button className='ui button font type-yellow'>Learn More</Button>

                  <Header as='h3' style={{ fontSize: '12px' }}>***A soft credit pull happens before you’ve accepted the credit card offer. A hard
                    credit pull occurs when you’ve accepted your credit card offer, which can have an impact on your
                    credit score.</Header>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid centered divided='vertically'>
              <Grid.Row columns={6}>
                <Grid.Column>
                  <Image
                      src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTYwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTU5Ljk4NSAxMy4zNTM4SDE1NS45MTZWMjkuMTM5N0gxNTkuOTg1VjEzLjM1MzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTU5Ljk4NSA1Ljc5NzM2SDE1NS45MTZWMTAuMDgwM0gxNTkuOTg1VjUuNzk3MzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUxLjY5NCA2LjAxMTU0VjkuNzEzMjZIMTQxLjI5M1YxNi4xNjgzSDE1MC4xNjRWMTkuODdIMTQxLjI5M1YyOS4xMzk2SDEzNy4wNzFWNi4wMTE1NEgxNTEuNjk0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyNS43MjEgMTkuNTY0TDEzMy4yNDcgMjkuMTM5NUgxMjguMzIxTDEyMi45OTggMjIuMzc4NUwxMjEuMzc3IDI0LjA2MTFWMjkuMTcwMUgxMTcuMzA4VjUuOTE5NjJIMTIxLjM3N1YxOC45NTIxTDEyNy41MjYgMTIuNDk3MUgxMzIuNDUyTDEyNS43MjEgMTkuNTY0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExMi40MTMgMjQuNjQyNUwxMTMuNjA2IDI4LjA2ODlDMTExLjc3IDI5LjEzOTYgMTA5LjgxMiAyOS42NTk3IDEwNy42NCAyOS42NTk3QzEwNC45MTggMjkuNjI5MSAxMDIuODA3IDI4LjgzMzcgMTAxLjM2OSAyNy4yNDI5Qzk5LjkzMSAyNS42NTIxIDk5LjE5NjggMjMuNDE4OCA5OS4xOTY4IDIwLjU3MzdDOTkuMTk2OCAxNy43NTkxIDk5LjkzMSAxNS41ODcgMTAxLjM2OSAxMy45OTYyQzEwMi44MDcgMTIuNDA1NCAxMDQuOTE4IDExLjYxIDEwNy42NCAxMS42MUMxMDguNjE5IDExLjYxIDEwOS40NDUgMTEuNjcxMiAxMTAuMTQ5IDExLjc5MzVDMTEwLjg1MyAxMS45MTU5IDExMS41ODcgMTIuMTMwMSAxMTIuMzIxIDEyLjQzNlYxNi4yNjAxQzExMS41ODcgMTUuODkzIDExMC44NTMgMTUuNjQ4MiAxMTAuMjEgMTUuNDk1M0MxMDkuNTM3IDE1LjM0MjMgMTA4LjgzMyAxNS4yODExIDEwOC4wMzggMTUuMjgxMUMxMDQuOTQ4IDE1LjMxMTcgMTAzLjQxOSAxNy4wNTU1IDEwMy40MTkgMjAuNTQzMUMxMDMuNDE5IDI0LjE1MyAxMDQuOTE4IDI1Ljk1OCAxMDcuOTQ2IDI1Ljk1OEMxMDkuNDE1IDI1Ljk1OCAxMTAuODgzIDI1LjUyOTcgMTEyLjQxMyAyNC42NDI1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk0Ljg4MzQgMTYuMDE1MkM5NS41MjU4IDE3LjM5MTkgOTUuODYyMyAxOC44OTA5IDk1Ljg2MjMgMjAuNjA0MUM5NS44NjIzIDIyLjMxNzMgOTUuNTI1OCAyMy44NDcgOTQuODgzNCAyNS4yMjM2Qzk0LjI0MDkgMjYuNjAwMyA5My4yMzE0IDI3LjY3MTEgOTEuOTQ2NSAyOC40NjY1QzkwLjYzMSAyOS4yNjE5IDg5LjA0MDIgMjkuNjU5NiA4Ny4yMDQ2IDI5LjY1OTZDODUuMzA3OCAyOS42NTk2IDgzLjcxNyAyOS4yNjE5IDgyLjQwMTUgMjguNDY2NUM4MS4wODYxIDI3LjY3MTEgODAuMTA3MSAyNi42MDAzIDc5LjQzNCAyNS4yMjM2Qzc4Ljc2MSAyMy44NDcgNzguNDU1MSAyMi4zMTczIDc4LjQ1NTEgMjAuNjA0MUM3OC40NTUxIDE4LjkyMTUgNzguNzkxNiAxNy4zOTE5IDc5LjQzNCAxNi4wMTUyQzgwLjEwNzEgMTQuNjM4NiA4MS4wODYxIDEzLjU2NzggODIuNDAxNSAxMi43NzI0QzgzLjcxNyAxMS45NzcgODUuMzA3OCAxMS41NzkzIDg3LjIwNDYgMTEuNTc5M0M4OS4wNzA4IDExLjU3OTMgOTAuNjYxNiAxMS45NzcgOTEuOTQ2NSAxMi43NzI0QzkzLjIzMTQgMTMuNTY3OCA5NC4yNDA5IDE0LjYzODYgOTQuODgzNCAxNi4wMTUyWk05MS42NzExIDIwLjYwNDFDOTEuNjcxMSAxOC45MjE1IDkxLjI3MzQgMTcuNTc1NSA5MC41MDg2IDE2LjU5NjVDODkuNzQzOCAxNS42MTc1IDg4LjY0MjUgMTUuMTI4IDg3LjIwNDYgMTUuMTI4Qzg1LjczNjEgMTUuMTI4IDg0LjYzNDggMTUuNjE3NSA4My44Mzk0IDE2LjU5NjVDODMuMDc0NiAxNy41NzU1IDgyLjY3NjkgMTguODkwOSA4Mi42NzY5IDIwLjYwNDFDODIuNjc2OSAyMi4zMTczIDgzLjA3NDYgMjMuNjMyOCA4My44Mzk0IDI0LjYxMThDODQuNjA0MiAyNS41OTA4IDg1LjczNjEgMjYuMDgwMiA4Ny4yMDQ2IDI2LjA4MDJDODguNjQyNSAyNi4wODAyIDg5Ljc0MzggMjUuNTkwOCA5MC41MDg2IDI0LjYxMThDOTEuMjczNCAyMy42MzI4IDkxLjY3MTEgMjIuMjg2NyA5MS42NzExIDIwLjYwNDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzUuNzkzNCAyNS42ODI2VjI5LjIzMTRDNzQuODQ1IDI5LjQ0NTUgNzMuOTU3OCAyOS41Njc5IDczLjE5MyAyOS41Njc5QzcxLjUxMDQgMjkuNTM3MyA3MC4yODY3IDI5LjIwMDggNjkuNTIxOSAyOC40OTcxQzY4Ljc1NzEgMjcuNzkzNSA2OC4zNTk0IDI2LjcyMjcgNjguMzU5NCAyNS4yNTQzVjUuODg5MUg3Mi40MjgyVjIzLjkwODJDNzIuNDI4MiAyNC42NDI0IDcyLjU1MDYgMjUuMTYyNSA3Mi43OTUzIDI1LjQzNzlDNzMuMDQwMSAyNS43MTMyIDczLjQ2ODQgMjUuODY2MiA3NC4xMTA4IDI1Ljg2NjJDNzQuNzUzMyAyNS44NjYyIDc1LjMwMzkgMjUuODA1IDc1Ljc5MzQgMjUuNjgyNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02Mi41Nzc0IDE5LjQxMTJDNjMuMzExNiAyMC4zMjg5IDYzLjY0ODEgMjEuNDMwMyA2My42NDgxIDIyLjc3NjRDNjMuNjQ4MSAyNC45MTc4IDYyLjk3NTEgMjYuNTA4NyA2MS42NTk2IDI3LjU3OTRDNjAuMzQ0MSAyOC42NTAyIDU4LjExMDkgMjkuMTM5NiA1NC45OTA0IDI5LjEzOTZINDYuMTc5N1Y2LjAxMTU0SDU0Ljk5MDRDNTcuODA0OSA2LjAxMTU0IDU5Ljc5MzUgNi41MzE2MSA2MC45ODY2IDcuNTcxNzZDNjIuMTc5NyA4LjYxMTkyIDYyLjc2MDkgMTAuMTQxNiA2Mi43NjA5IDEyLjIyMTlDNjIuNzYwOSAxMy40NzYyIDYyLjUxNjIgMTQuNTE2MyA2MS45OTYxIDE1LjM3MjlDNjEuNDc2MSAxNi4yMjk1IDYwLjY1IDE2LjkwMjUgNTkuNTQ4NyAxNy4zOTJDNjAuODMzNiAxNy44MjAzIDYxLjg0MzIgMTguNDkzNCA2Mi41Nzc0IDE5LjQxMTJaTTU4LjM4NjIgMjQuOTQ4NEM1OS4wNTkyIDI0LjQyODQgNTkuMzY1MiAyMy42MDI0IDU5LjM2NTIgMjIuNDcwNEM1OS4zNjUyIDIxLjMzODUgNTguOTk4IDIwLjU0MzEgNTguMjYzOCAyMC4wMjNDNTcuNTI5NiAxOS41MDI5IDU2LjQyODMgMTkuMjU4MiA1NC45OTA0IDE5LjI1ODJINTAuNDAxNVYyNS43MTMzSDU0Ljk5MDRDNTYuNTgxMiAyNS43MTMzIDU3LjcxMzEgMjUuNDY4NSA1OC4zODYyIDI0Ljk0ODRaTTU4LjQ0NzQgMTIuNTU4NEM1OC40NDc0IDExLjQyNjQgNTguMTcyIDEwLjYzMSA1Ny42NTIgMTAuMTQxNkM1Ny4xMzE5IDkuNjUyMDcgNTYuMjQ0NyA5LjQwNzMzIDU0Ljk5MDQgOS40MDczM0g1MC40MDE1VjE1LjgzMThINTQuOTkwNEM1Ny4yODQ5IDE1LjgzMTggNTguNDQ3NCAxNC43MzA1IDU4LjQ0NzQgMTIuNTU4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMy4zMDAyIDEyLjUyNzdDMzYuMTc1OSAxNS40MDM0IDM2LjE3NTkgMjAuMDUzNSAzMy4zMDAyIDIyLjg5ODdMMjIuOTI5MyAzMy4zMDAyQzIwLjA1MzUgMzYuMTc1OSAxNS40MDM0IDM2LjE3NTkgMTIuNTU4MyAzMy4zMDAyTDIuMTU2NzkgMjIuOTI5M0MtMC43MTg5MjkgMjAuMDUzNSAtMC43MTg5MjkgMTUuNDAzNCAyLjE1Njc5IDEyLjU1ODNMMTIuNTI3NyAyLjE1Njc5QzE1LjQwMzQgLTAuNzE4OTI5IDIwLjA1MzUgLTAuNzE4OTI5IDIyLjkyOTMgMi4xNTY3OUwzMy4zMDAyIDEyLjUyNzdaTTI1LjUyOTYgMjAuMzI4OUMyNi45Njc1IDE4Ljg5MSAyNi45Njc1IDE2LjU2NiAyNS41Mjk2IDE1LjEyODFMMjAuMzI4OSA5LjkyNzM0QzE4Ljg5MSA4LjQ4OTQ4IDE2LjU2NiA4LjQ4OTQ4IDE1LjEyODEgOS45MjczNEw5LjkyNzM0IDE1LjEyODFDOC40ODk0OCAxNi41NjYgOC40ODk0OCAxOC44OTEgOS45MjczNCAyMC4zMjg5TDE1LjEyODEgMjUuNTI5NkMxNi41NjYgMjYuOTY3NSAxOC44OTEgMjYuOTY3NSAyMC4zMjg5IDI1LjUyOTZMMjUuNTI5NiAyMC4zMjg5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='/>
                  <Button className='ui button font type-yellow' style={{marginBottom: '10px', marginTop: '10px'}}>Get Started</Button>
                  <Button className='ui button font type-blue'>Login</Button>
                </Grid.Column>

                <Grid.Column>
                  Products
                  <Item>Wallet</Item>
                  <Item>Loans</Item>
                  <Item>Trade</Item>
                  <Item>Credit Card</Item>
                  <Item>Personalized Yield</Item>
                </Grid.Column>

                <Grid.Column>
                  Institutions
                  <Item>BlockFi Prime</Item>
                  <Item>Crypto Mining Loans</Item>
                  <Item>Investment Products</Item>
                </Grid.Column>

                <Grid.Column>
                  Services
                  <Item>Partners</Item>
                  <Item>Refer-A-Friend</Item>
                </Grid.Column>

                <Grid.Column>
                  Resources
                  <Item>Our Rates</Item>
                  <Item>FAQ</Item>
                  <Item>Fees</Item>
                  <Item>Help Center</Item>
                  <Item>Blog</Item>
                  <Item>Blockfi Live</Item>
                </Grid.Column>

                <Grid.Column>
                  Company
                  <Item>Missions</Item>
                  <Item>Investors</Item>
                  <Item>Jobs</Item>
                  <Item>Contact Us</Item>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

class Blockfi extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MidPage/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Blockfi/>, document.getElementById('root'));
