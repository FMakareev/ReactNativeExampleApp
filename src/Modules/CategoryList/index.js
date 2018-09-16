import React, {Component} from 'react';
import {Query} from "react-apollo";
import {ContainerStyled, TextStyled} from "./styled";
import {CategoryListQuery} from "./query";
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native'
import ProductList from "../ProductList";

export class CategoryList extends Component {

  static navigationOptions = {
    title: 'CategoryList',
  };

  render() {
    const {navigation} = this.props;
    return (<ContainerStyled>
      <TextStyled>
        CategoryList
      </TextStyled>

      <Query query={CategoryListQuery}>
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

          const {viewer: {categoryList}} = data

          return (
            <ScrollView>
              {categoryList.map((item, index) => (
                <View key={item.categoryID}>
                  <Text>
                    #{item.categoryID}
                  </Text>
                  <Text>
                    {item.name}
                  </Text>
                  <Text>
                    {item.description}
                  </Text>
                  <Button
                    title={`Move ${item.categoryID}`}
                    onPress={() => navigation.navigate('ProductList', {
                      categoryID: item.categoryID
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

export default CategoryList;