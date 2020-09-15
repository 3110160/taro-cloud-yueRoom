export interface Company {
    businessScope:string, // 营业范围
    companyName:string, // 公司名
    companylocal:string, // 公司地址
    legalPerson?:string, // 法人
    logo?:string, // logo
    scale?:number, // 人数
}

export interface Room {
    companyId:string, // 企业ID
    equipment:string, // 有哪些设备
    name:string, // 名称
    position?:string, // 位置
    roomNumber?:string, // 房号
    scale?:number, // 能容纳几人
    size?:number, // 多少平方
}