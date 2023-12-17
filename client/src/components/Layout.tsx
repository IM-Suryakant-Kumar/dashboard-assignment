import { Outlet } from "react-router"
import { Container } from "../styles/layout.css"

const Layout = () => {
  return (
    <Container>
        <Outlet />
    </Container>
  )
}

export default Layout