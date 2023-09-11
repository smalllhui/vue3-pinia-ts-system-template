# vite+vue3+pinia+ts 后台系统模板

## 项目运行

### 前端项目运行

```tex
git clone https://github.com/smalllhui/vue3-pinia-ts-system-template.git
cd vue3-vuex-ts-system-template
npm install
npm run dev
```

### 后端服务器运行

```tex
git clone https://github.com/smalllhui/server-test.git
cd server-test
npm install
npm run dev
```

## 页面展示

### 登录页面

![login.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/517828ff58574b098fa9a1605fa9348b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image)

### admin展示

![admin.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a2329f0ac5f44d4a0490108c425d336~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image)

### user展示

![user.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fcf283fdf3f4fde83610c915ed508bb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image)

### guest展示

![guest.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11200d1c6abd498f974dc3fa7b7d5220~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image)

## 后端接口

### 用户登录

>发送请求
>
>```http
>POST http://localhost:8080/8080/user/login
>Content-Type: application/json
># 账号与密码一样 提供三个账号测试：admin、user、guest
>{
>  "userAccount": "admin",
>  "userPassword": "admin",
>  "captcha": "777"
>}
>```
>
>返回结果
>
>```json
>{
>    "code": 200,
>    "message": "ok",
>    "data": {
>        "userInfo": {
>            "userNick": "超级管理员",
>            "userAvatar": "https://p26-passport.byteacctimg.com/img/user-avatar/43876053a00c7c10e3a59026be31dfb5~150x150.jpg"
>        },
>        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTMxNjk4MTYsImV4cCI6MTY5Mzc3NDYxNn0.AtbLqZK_kAbjB77dLdUgHFLFfRcTZEsKz7K9IaKoh8o"
>    }
>}
>```

### 查询权限菜单列表

>发送请求
>
>```http
># 查询用户权限菜单列表
>GET http://localhost:8080/8080/user/queryMenuList
>Content-Type: application/json
>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTMxNjkzNTcsImV4cCI6MTY5Mzc3NDE1N30.1xO0o6LJq9rhTblTtlKkP19jkWjvhwlrmyVBvytgojQ
>```
>
>返回结果
>
>```json
>{
>    "code": 200,
>    "message": "ok",
>    "data": {
>        "menuList": [
>            {
>                "menuId": 15,
>                "menuName": "系统管理",
>                "menuType": 1,
>                "parentMenuId": 1,
>                "menuIcon": "iconfont icon-xitongguanli",
>                "cacheState": false,
>                "children": [
>                    {
>                        "menuId": 24,
>                        "menuName": "按钮权限",
>                        "menuType": 2,
>                        "parentMenuId": 15,
>                        "menuIcon": "iconfont icon-zhanghao",
>                        "routeAddress": "/system/user",
>                        "menuState": 1,
>                        "componentPath": "/system/UserManager/index.vue",
>                        "permissionsCode": "system:user:list",
>                        "cacheState": true,
>                        "children": [
>                            {
>                                "menuId": 62,
>                                "menuName": "新增",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:add",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 63,
>                                "menuName": "删除",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:delete",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 64,
>                                "menuName": "批量删除",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:patchdel",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 65,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "permissionsCode": "system:user:edit",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 69,
>                                "menuName": "导出",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:export",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 70,
>                                "menuName": "打印",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:print",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 79,
>                                "menuName": "查看",
>                                "menuType": 3,
>                                "parentMenuId": 24,
>                                "menuState": 1,
>                                "permissionsCode": "system:user:view",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    },
>                    {
>                        "menuId": 16,
>                        "menuName": "部门管理",
>                        "menuType": 2,
>                        "parentMenuId": 15,
>                        "menuIcon": "iconfont icon-bumen",
>                        "routeAddress": "/system/dept",
>                        "menuState": 1,
>                        "componentPath": "/system/DepartmentManager/index.vue",
>                        "permissionsCode": "system:dept:list",
>                        "cacheState": true,
>                        "children": [
>                            {
>                                "menuId": 21,
>                                "menuName": "新增",
>                                "menuType": 3,
>                                "parentMenuId": 16,
>                                "componentPath": "",
>                                "permissionsCode": "system:dept:add",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 22,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 16,
>                                "permissionsCode": "system:dept:edit",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 23,
>                                "menuName": "删除",
>                                "menuType": 3,
>                                "parentMenuId": 16,
>                                "permissionsCode": "system:dept:delete",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    },
>                    {
>                        "menuId": 17,
>                        "menuName": "菜单管理",
>                        "menuType": 2,
>                        "parentMenuId": 15,
>                        "menuIcon": "iconfont icon-xitongguanli-caidanguanli",
>                        "routeAddress": "/system/menu",
>                        "menuState": 1,
>                        "componentPath": "/system/MenuManager/index.vue",
>                        "permissionsCode": "system:menu:list",
>                        "cacheState": false,
>                        "children": [
>                            {
>                                "menuId": 18,
>                                "menuName": "新增",
>                                "menuType": 3,
>                                "parentMenuId": 17,
>                                "permissionsCode": "system:menu:add",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 19,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 17,
>                                "permissionsCode": "system:menu:edit",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 20,
>                                "menuName": "删除",
>                                "menuType": 3,
>                                "parentMenuId": 17,
>                                "permissionsCode": "system:menu:delete",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    },
>                    {
>                        "menuId": 25,
>                        "menuName": "角色管理",
>                        "menuType": 2,
>                        "parentMenuId": 15,
>                        "menuIcon": "iconfont icon-jiaoseguanli",
>                        "routeAddress": "/system/role",
>                        "menuState": 1,
>                        "componentPath": "/system/RoleManager/index.vue",
>                        "permissionsCode": "system:role:list",
>                        "cacheState": false,
>                        "children": [
>                            {
>                                "menuId": 50,
>                                "menuName": "新增",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "permissionsCode": "system:role:add",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 51,
>                                "menuName": "删除",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "menuState": 1,
>                                "permissionsCode": "system:role:delete",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 52,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "menuState": 1,
>                                "permissionsCode": "system:role:edit",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 56,
>                                "menuName": "批量删除",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "permissionsCode": "system:role:patchdel",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 57,
>                                "menuName": "导出",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "menuState": 1,
>                                "permissionsCode": "system:role:export",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 58,
>                                "menuName": "打印",
>                                "menuType": 3,
>                                "parentMenuId": 25,
>                                "menuState": 1,
>                                "permissionsCode": "system:role:print",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    }
>                ]
>            },
>            {
>                "menuId": 66,
>                "menuName": "设置页面",
>                "menuType": 1,
>                "parentMenuId": 1,
>                "menuIcon": "iconfont icon-xitongshezhi",
>                "cacheState": false,
>                "children": [
>                    {
>                        "menuId": 116,
>                        "menuName": "个人设置",
>                        "menuType": 2,
>                        "parentMenuId": 66,
>                        "menuIcon": "iconfont icon-bumen",
>                        "routeAddress": "/setting/person",
>                        "menuState": 1,
>                        "componentPath": "/setting/PersonSetting/index.vue",
>                        "permissionsCode": "setting:person:list",
>                        "cacheState": true,
>                        "children": [
>                            {
>                                "menuId": 122,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 116,
>                                "permissionsCode": "setting:person:edit",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    },
>                    {
>                        "menuId": 117,
>                        "menuName": "系统设置",
>                        "menuType": 2,
>                        "parentMenuId": 66,
>                        "menuIcon": "iconfont icon-xitongguanli-caidanguanli",
>                        "routeAddress": "/setting/system",
>                        "menuState": 1,
>                        "componentPath": "/setting/SystemSetting/index.vue",
>                        "permissionsCode": "setting:system:list",
>                        "cacheState": false,
>                        "children": [
>                            {
>                                "menuId": 18,
>                                "menuName": "新增",
>                                "menuType": 3,
>                                "parentMenuId": 117,
>                                "permissionsCode": "setting:system:add",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 19,
>                                "menuName": "修改",
>                                "menuType": 3,
>                                "parentMenuId": 117,
>                                "permissionsCode": "setting:system:edit",
>                                "cacheState": false,
>                                "children": []
>                            },
>                            {
>                                "menuId": 20,
>                                "menuName": "删除",
>                                "menuType": 3,
>                                "parentMenuId": 117,
>                                "permissionsCode": "setting:system:delete",
>                                "cacheState": false,
>                                "children": []
>                            }
>                        ]
>                    }
>                ]
>            },
>            {
>                "menuId": 734,
>                "menuName": "异常管理",
>                "menuType": 1,
>                "parentMenuId": 1,
>                "menuIcon": "iconfont icon-yichangguanli",
>                "cacheState": false,
>                "children": [
>                    {
>                        "menuId": 3116,
>                        "menuName": "无权限访问",
>                        "menuType": 2,
>                        "parentMenuId": 734,
>                        "menuIcon": "iconfont icon-invalidation",
>                        "routeAddress": "/exception/403",
>                        "menuState": 1,
>                        "componentPath": "/exception/NotPermission/index.vue",
>                        "permissionsCode": "",
>                        "cacheState": true,
>                        "children": []
>                    },
>                    {
>                        "menuId": 4117,
>                        "menuName": "资源不存在",
>                        "menuType": 2,
>                        "parentMenuId": 734,
>                        "menuIcon": "iconfont icon-icon-test1",
>                        "routeAddress": "/exception/404",
>                        "menuState": 1,
>                        "componentPath": "/exception/NotFound/index.vue",
>                        "permissionsCode": "",
>                        "cacheState": true,
>                        "children": []
>                    },
>                    {
>                        "menuId": 5117,
>                        "menuName": "服务器异常",
>                        "menuType": 2,
>                        "parentMenuId": 734,
>                        "menuIcon": "iconfont icon-yingjiceyan",
>                        "routeAddress": "/exception/500",
>                        "menuState": 1,
>                        "componentPath": "/exception/ServerException/index.vue",
>                        "permissionsCode": "",
>                        "cacheState": true,
>                        "children": []
>                    }
>                ]
>            }
>        ]
>    }
>}
>```
>
>
