import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Name = styled.h1`
    font-size: 40px;
    color: forestgreen;
`
export const BackLink = styled.div`
  font-size: 20px;
`

const name = 'Ash Sharma'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <Container> 
        <Header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <Name>{name}</Name>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <Name>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
              </Name>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackLink>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          </BackLink>
      )}
    </Container>
  )
}
