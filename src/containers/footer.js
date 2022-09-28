import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Call
                <Footer.Link href="tel:08000225173"> 08000225173 </Footer.Link>
            </Footer.Title>

            <Footer.Break />

            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link href="#">Only on Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem gift cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Guarantee</Footer.Link>
                </Footer.Column>
            </Footer.Row>

            <Footer.Break />

            <Footer.Select>
                <Footer.Option value="English">English</Footer.Option>
                <Footer.Option value="Arabic">Arabic</Footer.Option>
                <Footer.Option value="Nederlands">Nederlands</Footer.Option>
            </Footer.Select>

            <Footer.Break />

            <Footer.Text>
                Netflix Uniterd Kingdom
            </Footer.Text>
        </Footer>
    )
}