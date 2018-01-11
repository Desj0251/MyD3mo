import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    List,
    ListItem,
    FooterTab,
    Button,
    Left,
    Right,
    Card,
    CardItem,
    Body,
    Icon,
    Text,
    View,
    Thumbnail
} from 'native-base'

import * as actions from "../actions";
import {connect} from "react-redux";
import {Image} from "react-native";

export class Details extends Component {




    render() {

        let img = "";

        if (this.props.myInfo.image_url != "") {
            img = this.props.myInfo.image_url;
        } else {
            img = "http://www.omgchrome.com/wp-content/uploads/2015/06/chrome-trex-dinosaur.jpg";
        }

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.props.backbtns}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Details</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>

                        <CardItem>
                            <Left>
                                <Thumbnail small source={{uri: 'https://pbs.twimg.com/profile_images/882666982599909376/peDCVLbO_400x400.jpg'}} />
                                <Body>
                                <Text>{this.props.myInfo.name}</Text>
                                <Text note>{(this.props.myInfo.distance/1000 ).toFixed(2)} KM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>
                            <Image source={{uri: img}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>

                        <CardItem>
                            <Text note>{this.props.myInfo.location.address1}</Text>
                        </CardItem>

                        <CardItem>
                            <Left>
                                <Text>Phone</Text>
                            </Left>
                            <Right>
                                <Text note>{this.props.myInfo.phone}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Rating</Text>
                            </Left>
                            <Right>
                                <Text note>{this.props.myInfo.rating}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Review Count</Text>
                            </Left>
                            <Right>
                                <Text note>{this.props.myInfo.review_count}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Price</Text>
                            </Left>
                            <Right>
                                <Text note>{this.props.myInfo.price}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon name="logo-twitter" style={{color: '#0084b4'}}/>
                            <Text style={{color: '#0084b4'}}>twitter.com/yelp</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Body>
                            <Text>© 2018 John Desjardins</Text>
                        </Body>
                    </FooterTab>
                </Footer>
            </Container>

        );



    }

};

const mapStateToProps = (state) => {
    return {
        myInfo: state.currentRest,
        isShowMain: state.isShowMain

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.displayRestaurants()),
        backbtns: () => dispatch(actions.backToMain())
    }
}


//export default connect(Details);

export default connect(mapStateToProps, mapDispatchToProps)(Details);