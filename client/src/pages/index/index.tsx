import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'

// import Login from '../../components/login/index'
import {createCompany,createRoom,createOrder,getRoomList,cancelOrReceiveOrder} from "@/api"

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  createCompany(){
    const data={
      businessScope:"国务院",
      companyName:"国务院测试",
      companylocal:"测试测试",
      legalPerson:"测试",
      logo:"",
      scale:1000,
    }
    createCompany(data).then(_=>{})
  }
  createOrder(){
    const data={
      organizerId:"212113",
      roomId:"12112",
      joinNumber:100,
    }
    createOrder(data).then(_=>{})
  }

  createRoom(){
    const data={
      companyId:"121122",
      name:"国务院测试",
      position:"2楼",
      roomNumber:"402",
      scale:"100人",
      size:"20平",
    }
    createRoom(data).then(_=>{})
  }

  getRoomList(){
    getRoomList('121122').then(res=>{
      console.log(res)
    })
  }

  cancelOrReceiveOrder(val){
    const data={
      receive:val,
      orderId:"9170e7955f60dbaf0009164d4923c8f1",
      userId:"c54dac465f61fcce0016e60f7f421ac6",
    }
    cancelOrReceiveOrder(data).then(_=>{})
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={()=>this.createCompany()}>新增公司1</Button>
        <Button onClick={()=>this.createRoom()}>新增room</Button>
        <Button onClick={()=>this.createOrder()}>新增order</Button>
        <Button onClick={()=>this.getRoomList()}>getRoomList</Button>
        <Button onClick={()=>this.cancelOrReceiveOrder(1)}>接受</Button>
        <Button onClick={()=>this.cancelOrReceiveOrder(0)}>取消</Button>
      </View>
    )
  }
}
