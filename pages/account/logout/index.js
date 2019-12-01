const Logout = () => {
  return null
}

Logout.getInitialProps = ({ res }) => {
  res.writeHead(302, {
    'Location': '/',
    'Set-Cookie': [
      `token=;path=/;max-age=0}`,
      `username=;path=/;max-age=0}`,
      `authtype=;path=/;max-age=0}`
    ]
  })
  res.end()
}

export default Logout