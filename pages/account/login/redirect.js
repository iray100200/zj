const Redirect = () => {
  return null
}

Redirect.getInitialProps = ({ res, query }) => {
  console.log(query)
  res.writeHead(302, {
    'Location': query.authtype === 'admin' ? '/admin' : '/',
    'Set-Cookie': [
      `token=${query.token};httpOnly;path=/;overwrite=true;${Number(query.rememberme) ? 'max-age=108000' : ''}`,
      `username=${Buffer.from(query.username).toString('base64')};httpOnly;path=/;overwrite=true;${Number(query.rememberme) ? 'max-age=108000' : ''}`,
      `authtype=${query.authtype};httpOnly;path=/;overwrite=true;${Number(query.rememberme) ? 'max-age=108000' : ''}`
    ]
  })
  res.end()
}

export default Redirect