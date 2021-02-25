import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    KeyboardAvoidingView,
    Alert,
    TextInput, 
    Modal,
    FlatList,
} from 'react-native';
import db from "../config";
import firebase from "firebase";
import { ListItem } from 'react-native-elements'


import MyHeader from '../components/MyHeader'

export default class UserDetailsScreen extends React.Component{
 constructor(props){
     super(props);
     this.state={
         userId:firebase.auth().currentUser.email,
         recieverId:this.props.navigation.getParam("details")["user_id"],
         requestId:this.props.navigation/getParam("deatils")["Exchange_id"],
         item_name:this.props.navigation.getParam("details")["item"],
         description_of_item:this.props.navigation.getParam("details")["description"],
         recieverName:'',
         recieverContact:'',
         recieverAddress:'',
         recieverRequestDocId:'',
     }      
 }
 
 getReciverDetails=()=>{
     db.collection("users").where("email_id","==",this.state.userId).get()
     .then(
         snapshot=>{
             snapshot.forEach(
                 doc=>{
                    this.setState({
                     recieverName    : doc.data().first_name,
                     recieverContact : doc.data().contact,
                     recieverAddress : doc.data().address,
                    })
                 }
             )
         }
     )

     db.collection("requests").where("request_id","==",this.state.requestId).get()
     .then(
         snapshot=>{
             snapshot.forEach(
                 doc=>{
                     this.setState({
                         recieverRequestDocId:doc.id
                     })
                 }
             )
         }
     )
 }

 updateBookStatus=()=>{
     db.collection("My_Donations").add({
     book_name           : this.state.bookName,
    request_id          : this.state.requestId,
    requested_by        : this.state.recieverName,
    donor_id            : this.state.userId,
    request_status      :  "Donor Interested"
     })

  componentDidMount(){
     getReciverDetails()
 }

 getUserDetails=()=>{
  db.collection("users").where("email_id","==",this.state.userId)
  .get().then(
    snapshot=>{
      snapshot.forEach((doc)=>{
      this.setState({userName:doc.data().first_name + " " + doc.data().last_name})
      })
    }
  )
}

 addNotification=()=>{
   var message = this.state.userId + "has shown intrest to donating the" + this.state.item_name
   db.collection("all_notifications").add({
     "targeted_user_id":this.state.recieverId,
     "donor_id":this.state.userId,
     "requestId":this.state.requestId,
     "item_name":this.state.item_name,
     "date":firebase.firestore.FieldValue.serverTimeStamp,
     "notification_status":"unread",
     "message":message,
   })
 }

render(){
     return(
      <View style={styles.container}>
        <View style={{flex:0.1}}>
          <Header
            leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
            centerComponent={{ text:"Donate Books", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"
          />
        </View>
        <View style={{flex:0.3}}>
          <Card
              title={"Book Information"}
              titleStyle= {{fontSize : 20}}
            >
            <Card >
              <Text style={{fontWeight:'bold'}}>Name : {this.state.bookName}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Reason : {this.state.reason_for_requesting}</Text>
            </Card>
          </Card>
        </View>
        <View style={{flex:0.3}}>
          <Card
            title={"Reciever Information"}
            titleStyle= {{fontSize : 20}}
            >
            <Card>
              <Text style={{fontWeight:'bold'}}>Name: {this.state.recieverName}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Contact: {this.state.recieverContact}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Address: {this.state.recieverAddress}</Text>
            </Card>
          </Card>
        </View>
        <View style={styles.buttonContainer}>
          {
            this.state.recieverId !== this.state.userId
            ?(
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{
                    this.updateBookStatus()
                    this.props.navigation.navigate('MyDonations')
                  }}>
                <Text>I want to Donate</Text>
              </TouchableOpacity>
            )
            : null
          }
        </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})
