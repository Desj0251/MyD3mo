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
    Body,
    Icon,
    Text,
    View,
    ScrollView,
    Spinner
} from 'native-base'


import {connect} from "react-redux";
import * as actions from "../actions"
import RestaurantInfos from "./RestaurantInfo";
import Details from "./Details";

export class Main extends Component {

    render() {

        if(this.props.isShowMain){

            // sort array
            let sortedArray = this.props.thisArray.sort(function(a, b){
                return (a.distance > b.distance)? 1 : -1;
            });

            let restList = sortedArray.map(item => {
                return <RestaurantInfos key={item.name} restaurant ={item} />
            });

            // Set body based on isFetching state
            let body = "";

            if(!this.props.isFetching) {
                body =
                    <Content padder>
                        <Button iconLeft full
                            style={{ justifyContent: 'center'}}
                            onPress={this.props.fetchData}>
                            <Icon name='beer' />
                            <Text id="btn1"> Load Data </Text>
                        </Button>
                        <List>{restList}</List>
                    </Content>;
            } else {
                body =
                    <Content>
                        <Spinner/>
                    </Content>;
            }

                return (
                    <Container>
                        <Header>
                            <Body>
                                <Title>Send Yelp</Title>
                            </Body>
                        </Header>
                            {body}
                        <Footer>
                            <FooterTab>
                                <Body>
                                    <Text>© 2018 John Desjardins</Text>
                                </Body>
                            </FooterTab>
                        </Footer>
                    </Container>
                );

        } else {
            return (
            <Details />);}
        }
};

        const mapStateToProps = (state) => {
            return {
            thisArray: state.data,
            restoinfo: state.currentRest,
            isShowMain: state.isShowMain,
            isFetching: state.isFetching

        }
        };


        const mapDispatchToProps = (dispatch) => {
            return {
            fetchData: () => dispatch(actions.displayRestaurants())
        }
        };



        export default connect(mapStateToProps, mapDispatchToProps)(Main);