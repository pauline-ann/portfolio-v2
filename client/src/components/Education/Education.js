// Dependencies
import React from 'react'
import { Grid, Container, Header, Divider, List } from 'semantic-ui-react'

// CSS
import './Education.css'

// Images

const Education = () => {

    return (
        <div className='education-div'>
            <Container className='Education-container' id='education'>
                <Grid>
                    <Grid.Row textAlign='left' className='Education-row'>
                        {/**********  PAGE HEADER  **********/}
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <Header as='h2' content='Education' className='Section-header' />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={12} computer={12} className='Education-column'>
                            <List>
                                <List.Item>
                                    <List.Icon name='graduation' />
                                    <List.Content>
                                        <List.Header>University of California, Santa Barbara</List.Header>
                                        <List.Description>
                                            2017 | B.S. in Environmental Science | Emphasis in Ecology, Evolution, and Marine Biology
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='graduation' />
                                    <List.Content>
                                        <List.Header>UCLA Extension</List.Header>
                                        <List.Description>
                                            2018 | Full Stack Web Development Certificate
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider className='Section-divider' />
                </Grid>
            </Container>
        </div >
    )
}

export default Education