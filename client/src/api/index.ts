import Taro from "@tarojs/taro";
import { Company, Room } from "./types"

const ERR_CODE_LIST = {
    '-501017': '磁盘耗尽',
    '-501018': '资源不可用',
    '-502001': '数据库请求失败',
    '-502002': '非法的数据库指令',
    '-502003': '无权限操作数据库',
    '-502011': '操作超时',
    '-601001': '系统错误',
    '-601002': '系统参数错误',
    '-601003': '系统网络错误',
};


const toast = (errCode) => Taro.showToast({
    title: ERR_CODE_LIST[errCode] || '数据库出错了',
    icon: 'none',
    duration: 2000
})
// 连接数据库
const db = Taro.cloud.database();

// admin新建 企业&会议室 维护基本信息
export const createCompany = async (data): Promise<boolean> => {
    try {
        const res = await db.collection("company").add({ data })
        console.log(`company数据add : `, res)
        return true
    } catch ({ errCode }) {
        toast(errCode)
        return false
    }
}

// 创建room
export const createRoom = async (data): Promise<boolean> => {
    try {
        const res = await db.collection("room").add({ data })
        console.log(`room数据add : `, res)
        return true
    } catch ({ errCode }) {
        toast(errCode)
        return false
    }
}

// 新建预约order
export const createOrder = async (data): Promise<boolean> => {
    try {
        const res = await db.collection("order").add({ data: { ...data, status: 1, } })
        console.log(`order数据add : `, res)
        return true
    } catch ({ errCode }) {
        toast(errCode)
        return false
    }
}

// room 列表查询 companyId
export const getRoomList = async (companyId) => {
    try {
        const res = await db.collection("room").where({ companyId }).get()
        return res
    } catch ({ errCode }) {
        toast(errCode)
    }
}

// 查询order表 
export const getOrderList = async ({ id, roomId, organizerId, status = 1, isReceive = 1, }) => {
    try {
        const res = await db.collection("order").where({ _id: id, roomId, organizerId, status, isReceive }).get()
        return res
    } catch ({ errCode }) {
        toast(errCode)
    }
}

// 单个room 的预约时间表 => order-list 最近几条

// 取消order

// 接受order

// 取消order

// 查询order详情

// 我的发起过的order

// 我参与过的

// 新增会议纪要




