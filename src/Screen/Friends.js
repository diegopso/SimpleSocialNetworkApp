import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { addFriend } from '../Reducer/Action/FriendActions';
import { connect } from 'react-redux';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.actions = bindActionCreators({
      addFriend,
    }, dispatch)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Friends Here!</Text>

        {
          this.props.friends.possible.map((friend, index) => (
              <Button
                key={ friend }
                title={ `Add ${ friend }` }
                onPress={() =>
                  this.actions.addFriend(index)
                }
              />
            )
          )
        }

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Friends);
