import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, TouchableHighlight, Image } from 'react-native'

const Home = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{console.log(json)
              setData(json)}
        )
    }, [])


    return (
        <View style={{paddingHorizontal:10,width:'100%', flex:1}}>
            <Text>Welcome, Jala!</Text>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:20}}>Choice you Best food</Text>
            <TextInput style={{width:'100%', height:40, borderWidth: 1, borderColor: 'black', marginBottom:10}}></TextInput>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                <TouchableOpacity style={{width:100,height:30,borderWidth:1,borderColor:'black',alignItems:'center', justifyContent:'center'}}><Text>Donut</Text></TouchableOpacity>
                <TouchableOpacity style={{width:100,height:30,borderWidth:1,borderColor:'black',alignItems:'center', justifyContent:'center'}}><Text>Pink Donut</Text></TouchableOpacity>
                <TouchableOpacity style={{width:100,height:30,borderWidth:1,borderColor:'black',alignItems:'center', justifyContent:'center'}}><Text>Floating</Text></TouchableOpacity>
            </View>
            <FlatList 
                style={{flex:1}}
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity
                    key={item.key}
                    onPress={()=>console.log(item.title)}
                    style={{flexDirection:'row', backgroundColor:'pink', padding:5, marginBottom:10}}
                    >
                    <Image source={{uri: item.image}} style={{width: 80, height: 80}} />
                    <View style={{justifyContent:'space-around', flex:1, backgroundColor:'pink'}}>
                      <Text style={{fontSize:16, fontWeight:'bold'}}>{item.title}</Text>
                      <Text>{item.description}</Text>
                      <Text style={{fontSize:14, fontWeight:'bold'}}>{item.price}</Text>
                      <TouchableOpacity style={{position:'absolute', bottom:0, right:0, backgroundColor:'aqua', height:50, width:50, borderRadius:25, justifyContent:'center', alignItems:'center'}}><Text>+</Text></TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )}
            />

            
        </View>
    )
}

export default Home
