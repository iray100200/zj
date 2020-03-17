const Logout = () => {
  return null
}

Logout.getInitialProps = ({ res }) => {
  res.writeHead(302, {
    'Location': '/',
    'Set-Cookie': [
      `token=;path=/;max-age=0;httpOnly`,
      `username=;path=/;max-age=0;httpOnly`,
      `authtype=;path=/;max-age=0;httpOnly`
    ]
  })
  res.end()
}

export default Logout