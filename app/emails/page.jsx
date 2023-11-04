import React from 'react'
import { Html,Preview,Body,Container,Text } from '@react-email/components'
export default function Welcome() {
  return (
    <Html>
        <Preview>HI</Preview>
        <Body>
            <Container>
                <Text>Hello World</Text>
                
            </Container>
        </Body>
    </Html>
  )
}
