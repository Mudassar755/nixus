import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BlogPost = () => {
    return (
        <section>
            <Container>
                <Row className='justify-content-center my-5'>
                    <Col lg={7} md={10} sm={12}>
                        <span className='primary-text gradient-text text-bold'>Posted on Octorber 6th 2021</span>
                        <h1 className='sub-heading'>Faster Semantic Segmentation with Machine Learning-Assisted Workflows</h1>
                    </Col>
                </Row>
                <div>
                    <img src={'/assets/images/blog-img.png'} alt='blog-post' className='w-100' />
                </div>
                <div className='blog-content'>
                    <Row className='justify-content-center'>
                        <Col lg={7} md={10} sm={12}>
                            <h3 className='blog-sub-heading'>As we in the UK look like ending the year as we started it</h3>
                            <p className='blog-text'>
                                As we in the UK look like ending the year as we started it – heading into yet another lockdown – you would be forgiven for thinking that we’re living in some kind of Covid-themed Groundhog Day, that 2021 has simply been a repeat of 2020, just without the novelty. Look back over the most-read articles, news stories and features published on It’s Nice That this year and you will find countless artists and designers creating work that responds to and grapples with the pandemic in a variety of ways.
                            </p>
                            <p className='blog-text'>
                                Take, for example, the feature we put together on the anniversary of the first lockdown in the UK, in which we asked ten photographers to each select a single image that summed up their experience. Another popular project saw us commission eight creatives to collaborate on a series of downloadable digital postcards, for sending to much-missed loved ones.
                            </p>
                            <p className='blog-text'>
                                Yet in many ways, our current situation is an unfair representation of 2021, a year when the creative world did manage (at least a few times) to focus on topics outside of Covid-19. Arguably the biggest of these was the climate crisis, as the issue returned to the top of the agenda, particularly around the Cop26 conference in November. At It’s Nice That, we shone a spotlight on a number of creative projects confronting the climate crisis, from a photography project examining the ways in which climate change affects indigenous populations to a series of comics aimed at demonstrating the global nature of the challenge. We also sent the photographer Flannery O’Kafka to capture the protesters in Glasgow, refusing to have their spirits dampened by the grey and drizzly weather.
                            </p>
                            <p className='blog-text'>
                                The creative world has also been shaken up this year by emerging technology and the popularisation of non-fungible tokens – to the extent that Collins’ Dictionary made “NFT” its word of the year. Some see these as a revolutionary new way for artists to make money from previously near-worthless digital artworks; others see NFTs as a mere extension of the art world’s obsession with ownership and scarcity. Either way, few would disagree that the world of NFTs is complex and fraught with challenges. That’s why we published a helpful primer about them, explaining everything an artist needs to know.
                            </p>
                            <h3 className='blog-sub-heading'>We launched the Extra Nice Fund, offering financial support to creative projects aimed at improving diversity within the creative industries</h3>
                            <p className='blog-text'>
                                The past 12 months haven’t just been about weighty topics, though. As always, we have been simply bowled over by the creativity and pure joyousness on display out there, whether you’re looking at surely the best balloon art the world has ever seen (courtesy of Masayoshi Matsumoto); a series of Drag Race-inspired Tarot cards (created by Juanjo Cristiani); a codable music video for Doja Cat (thanks to Girls Who Code); an AR app that will scan an old pile of Lego and tell you what you can build; or – last but not least – the iconic photos of the cast of Skins, shot by Ewen Spencer, which defined a generation.
                            </p
                            >
                            <p className='blog-text'>
                                Meanwhile, at It’s Nice That, we’ve been working to our mission – championing the very best of creativity and taking it to the broadest possible audience. We relaunched our longest-running series The Graduates as The Next Generation, opening it up in the process to young creatives who haven’t been to university. We launched the Extra Nice Fund, offering financial support to creative projects aimed at improving diversity within the creative industries. We worked with the illustrator and artist Vanilla Chi on a downloadable poster about standing up to anti-Asian hate. And we collaborated with Yinka Ilori on a series of articles about the importance of storytelling within creativity.
                            </p>
                            <p className='blog-text'>
                                We’ll be continuing in the same vein in 2022 and we look forward to seeing you again in the new year. For now, though, we hope you join us as we pause and reflect on what has been at times a chaotic but always a creative 2021, courtesy of our latest Review of the Year.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default BlogPost