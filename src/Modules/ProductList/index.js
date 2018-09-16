import React, {Component} from 'react';
import {Query} from "react-apollo";
import {ContainerStyled, TextStyled} from "./styled";
import {ProductListQuery} from "./query";
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native'

export class ProductList extends Component {

  static navigationOptions = ({navigation, ...rest}) =>{
    console.log('rest: ');
    const categoryId = navigation.getParam('categoryID', 'Non');
    return {
      title: `Category - ${categoryId}`
    }
  };

  render() {
    const {navigation} = this.props;
    console.log(this.props);
    const categoryID = navigation.getParam('categoryID',null);
    return (<ContainerStyled>
      <TextStyled>
        ProductList
      </TextStyled>

      <Query query={ProductListQuery} variables={{categoryID}}>
        {({loading, error, data}) => {
          console.log('loading, error, data', loading, error, data)

          if (loading) {
            return (
              <Text>
                'Loading...'
              </Text>
            )
          }
          if (error) return <Text>`Error! ${error.message}`</Text>

          const {viewer: {productList}} = data;

          return (
            <ScrollView>
              {productList.map((item, index) => (
                <View key={item.productID}>
                  <Text>
                    #{item.productID}
                  </Text>
                  <Text>
                    {item.name}
                  </Text>
                  <Button
                    title={`Move ${item.productID}`}
                    onPress={() => navigation.navigate('HomeScreen', {
                      productID: item.productID
                    })}
                  />

                </View>
              ))}
            </ScrollView>
          )
        }}
      </Query>

    </ContainerStyled>)
  }
}

export default ProductList;