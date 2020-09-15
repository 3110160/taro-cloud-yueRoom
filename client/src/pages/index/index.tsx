import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'

import Login from '../../components/login/index'
import {createCompany} from "@/api"

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
    createCompany({data}).then(_=>{
    debugger

    })
  }

  render () {
    return (
      <View className='index'>
        <Login/>
        <Button onClick={()=>this.createCompany()}>新增公司1</Button>
      </View>
    )
  }
}
