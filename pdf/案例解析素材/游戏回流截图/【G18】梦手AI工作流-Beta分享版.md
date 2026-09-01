> **配置问题反馈群：**群号：8496675

# 【一】这套 AI 工作流 Skill 能解决什么问题？

用**自然语言驱动AI，打通「策略生成 → 素材制作 → 配置投放」全链路**，将重复配置工作量解放出来，实现大规模精细化投放的高效落地。

**三大核心价值：**

1. 解放配置人力
2. 实现大规模精细化策略**（解放人力不是让AI替代人，而是可以让人和AI协同后做更多的事情）**
3. 自然语言即可驱动全流程

支持渠道：企微、大神（13个资源位）

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F27%2F5493795d27754ce8901eb967ada8de64.png&code=NzNkNnIzMzNfMTc4NzkwOTI4NDE1Ng%3D%3D)

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F19%2Fb79908a50d4f4838b45a48b245ace073.png&code=c3FlOXhuaWtfMTc4NzkwOTI4NDE1Nw%3D%3D)

---

# 【二】目前AI 化到什么程度？

- **已实现：**素材生成、素材配置、广告配置的全链路自动化，人工仅需把控「素材审核 \+ 配置审核」两道关口。
- **改造中：**数据分析环节，后续将补全「每日AI数据分析报告 →AI 策略方案 →AI生成及执行」闭环，让 AI 从"执行"走向"自驱优化"。

> ⚠️**最大的缺点（提前预期管理）：**
>
> 初次使用时，初始化配置较为繁琐；但**一次配置到位后，即可长期享受 AI"牛马"干活的乐趣**，边际成本极低

> 📝**写在最后：**
>
> 以下内容历经踩坑无数，纯古法手打总结。希望后续兄弟们接力花式魔改迭代

---

# **【三】此处正文开始**

### **使用前准备工作：**

#### **【1】工具安装**

**推荐使用code maker**

> 1. 打开浏览器，访问[https://code.visualstudio.com/](https://code.visualstudio.com/)→ 下载 VSCode → 安装
> 2. 插件主页：[https://codemaker.nie.netease.com/](https://codemaker.nie.netease.com/)→ 下载 VSCode 版本文件 → 打开 VSCode 从VISX进行安装（左下图）
> 3. 安装完成后点 CodeMaker 图标 → 用**公司 OpenID 登录**（右下图）
>
> 不需要额外申请权限，登录完就能直接用（也可以搜索简体中文补丁）

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F17%2Fa443f1804283499da077161b236bf5d2.png&code=dWc3dmxyYXlfMTc4NzkwOTI4NDE1Nw%3D%3D)![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F17%2F82df79b972174b0cac59c946e83c1226.png&code=NW9neHhlbXNfMTc4NzkwOTI4NDE1Nw%3D%3D)

简体中文补丁

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F28%2Fe48d1f6612ba4ad888f5d9393bfadc1d.png&code=OHVkdGp2NDlfMTc4NzkwOTI4NDE1Nw%3D%3D)

#### 【\*】完整安装手册：[CodeMaker 安装指南（内部版）](https://docs.popo.netease.com/lingxi/904e60599a5e4c698429c6d39eee9e22?appVersion=4.43.1&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&appVersion=4.46.2&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1)

---

#### **【2】key申请和子skill下载**

**需要提前申请北斗平台的key权限以及AIGC的key（支持部门key）**

##### **（1）北斗平台配置key**

1. step1：申请北斗api key权限
    1. 前往天章系统：申请【游戏通用-通用】产品分类的【用户接口密钥】权限

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F06%2F04%2F427a9e6d333143f49b98783b564d3ea8.png&code=MGtidGoxazBfMTc4NzkwOTI4NDE1Nw%3D%3D)

2. step2：权限通过后，前往北斗点击我的头像，创建API key

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F17%2Ff18c153d433d45d0b06fc79f65ffadca.png&code=eGJtN3ZxcjdfMTc4NzkwOTI4NDE1Nw%3D%3D)

##### （2）skill下载

一共三个skill要下载

**线下打包版（2026/08/28）**

[ai-workflow-suite-share.zip](https://office.netease.com/api/pub/file/download?path=92869531ad134382bc445f49f5c9def6&type=attachment&identity=538be4c3c11e45ea86796bb8e9cf7562&fileName=ai-workflow-suite-share.zip&code=M2g1cHFobXNfMTc4NzkwOTI4NDE1Nw%3D%3D)

**在线下载版（后续在线更新）**

**（1）AI工作流主skill安装包：**[**https://skills.netease.com/skills/skill\\_c86eb0a20ab3**](https://skills.netease.com/skills/skill_c86eb0a20ab3)

【AI指令】安装skill：本地链接

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2Fe66bbc2cde8f40b69b6007e9ba048a97.png&code=enpkanAzd3NfMTc4NzkwOTI4NDE1Nw%3D%3D)

**子skill：**

**（2）flowx skill****（**素材设计**）下载地址：**[**https://flowx.gz/**](https://flowx.gz/)

> **flowx问题反馈群：**群号：8341738

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F964d0cc931634cb8a9ccece1b6035d49.png&code=MWo4YWJmNGhfMTc4NzkwOTI4NDE1Nw%3D%3D)

**（3）北斗配置skill****（北斗配置）下载地址：**[**https://skills.netease.com/skills/skill\\_30d8ae6fd931**](https://skills.netease.com/skills/skill_30d8ae6fd931)

> **北斗配置问题反馈群：**群号：8496675

先不管AI提示什么，把这3个skill让AI安装后，**告诉AI：开始初始化配置**

---

#### **【3】本地信息同步**

**（直接发给AI即可）**

##### **（1）企微部分**

基础信息

| 项 | 值**（梦手的示例，切勿直接复制\)** | 项 | 值**（梦手的示例，切勿直接复制\)** |
| --- | --- | --- | --- |
| **北斗 api\_key** | ck\_\*\*\*\*（自备） | **AIGW key** | 6fc\*\*\* \(32 位） |
| **appkey** | 示例：g18 | **flowx gameId** | 梦手mhxysy   可以咨询@匡威\(匡振威\)或者直接问AI（skill里面包含了手册指令） |
| **广告账号 ID** | ![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F5e18d1bdb47e4731b38f3c3c80f69cb4.png&code=Mm5nYWIxYzdfMTc4NzkwOTI4NDE1OA%3D%3D) | **flowx key** | 只需要提交在flowx上注册的工作邮箱即可<br/>示例：duyu05@corp.netease.com |
| **小程序 appid/page/title** | 示例：网易超级会员小程序（大神小程序） | **小程序路径** | 如果多个，就做好备注：<br/>**日常小程序**：/pages/sem/index?game=g18&cv=dashen&pageId=PromoteTransPage&semId=8075fe33fc884095bb124771f0cd9d79&type=link&utm\_medium=qiwei&utm\_source=kf.g18<br/>**加码小程序**： |
| **黑名单分群** | 可以一次性提供多个，告诉AI规则，比如默认还是特定条件下的黑名单，示例：<br/>分群ID：6510f71e56fb98a4b707f5ed<br/>分群名：产品运营白名单账号 | ** 目标人群分群** | 可以多给AI同步一些常用的人群，方便后续快速执行调取，示例：<br/>【流失7-14天付费用户】<br/>分群ID：6a506cf7df3e9d18fbfa4933<br/>分群名：0710-流召-15-30<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F2f0aec19ecf14fe2acc19161d6a7f4d3.png&code=a29wZnY4ZzJfMTc4NzkwOTI4NDE1OA%3D%3D) |
| **奖励口径** | 主要给AI做文案一致性自动核查<br/>**示例：**<br/>日常使用最高648元福利金\+1160仙玉礼包。<br/>加码策略使用10次连抽最高5000元奖励。 | **KV库文件夹**<br/>（让AI来创建文件夹） | 在文件夹里存放：最好从官网下载壁纸，视觉干扰和画质等比较适用<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2Fc408d1a4487e43a58fac6bbadf455190.png&code=eXhkMDBrMXZfMTc4NzkwOTI4NDE1OA%3D%3D) |
| **ICON库** | 在本地文件夹存放：常用的奖励icon，文件命名好icon名称，视觉生成会自动调用名称<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2Fdfc6f4c9d9274f86a5366d992fd20d7d.png&code=YWN2dTJ6ZHhfMTc4NzkwOTI4NDE1OA%3D%3D) | **文案库** | 直接发给AI，作用是AI会根据历史内容推理出更多合格的文案，后期会自动组装调用：<br/>1**、提供历史优质转化主副标题**<br/>**示例：**主标题「回归限定礼包」/副标题「最高648福利金\+1160仙玉起的专属礼包」/按钮「限时领取」<br/>2、**提供企微历史优质推送文案**<br/>**示例：**「🎁你的专属回归礼包已到账 💰价值 1160\+仙玉的福利 ⏰仅48小时内有效 回游戏速领👇」 |

**企微推送主体、标签相关信息的通用配置页面**（北斗上看不到【通用配置管理】可以先申请权限--图1）

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F29e928d00d1b411aa4d65e14066e124d.png&code=Y2t5ZmEzcDhfMTc4NzkwOTI4NDE1OQ%3D%3D)![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F6212e56354a74468a380c1c6d0910a46.png&code=OG0zdzRudG9fMTc4NzkwOTI4NDE1OQ%3D%3D)

##### **（2）大神部分**

**部分标绿配置**如果企微配置过可以用不用重复配置

| 项 | 值**（梦手的示例，切勿直接复制\)** | 项 | 值**（梦手的示例，切勿直接复制\)** |
| --- | --- | --- | --- |
| **北斗 api\_key** | ck\_\*\*\*\*（自备） | **AIGW key** | 6fc\*\*\* \(32 位） |
| **appkey** | 示例：g18 | **flowx gameId** | 梦手mhxysy   可以咨询@匡威\(匡振威\)或者直接问AI |
| **广告账号 ID** | ![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F5e18d1bdb47e4731b38f3c3c80f69cb4.png&code=Mm5nYWIxYzdfMTc4NzkwOTI4NDE1OA%3D%3D) | **flowx key** | 只需要提交在flowx上注册的工作邮箱即可<br/>示例：duyu05@corp.netease.com |
| 圈子ID<br/>（prodSquareId ） | 大神CMS后台获取 | 跳转链接 | 如果多个，就做好备注：<br/>**日常活动**：[https://vip.ds.163.com/2c817acb2393ed88/g/my?wvFullScreen=true&wvStatusBarStyle=white&utm\\_source=ds.qdtc](https://vip.ds.163.com/2c817acb2393ed88/g/my?wvFullScreen=true&wvStatusBarStyle=white&utm_source=ds.qdtc)<br/>**加码活动**： |
| **黑名单分群** | 可以一次性提供多个，告诉AI规则，<br/>比如默认还是特定条件下的黑名单<br/>示例：<br/>分群ID：6510f71e56fb98a4b707f5ed<br/>分群名：产品运营白名单账号 | ** ****目标人群分群** | 可以多给AI同步一些常用的人群，方便后续快速执行调取，示例：<br/>【流失7-14天付费用户】<br/>分群ID：6a506cf7df3e9d18fbfa4933<br/>分群名：0710-流召-15-30<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F2f0aec19ecf14fe2acc19161d6a7f4d3.png&code=a29wZnY4ZzJfMTc4NzkwOTI4NDE1OA%3D%3D) |
| **奖励口径** | 主要给AI做文案一致性自动核查<br/>**示例：**<br/>日常使用最高648元福利金\+1160仙玉礼包。<br/>加码策略使用10次连抽最高5000元奖励。 | **KV库文件夹**<br/>（让AI来创建文件夹） | 在文件夹里存放：最好从官网下载壁纸，视觉干扰和画质等比较适用<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2Fc408d1a4487e43a58fac6bbadf455190.png&code=eXhkMDBrMXZfMTc4NzkwOTI4NDE1OA%3D%3D) |
| **ICON库** | 在本地文件夹存放：常用的奖励icon，文件命名好icon名称，视觉生成会自动调用名称<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2Fdfc6f4c9d9274f86a5366d992fd20d7d.png&code=YWN2dTJ6ZHhfMTc4NzkwOTI4NDE1OA%3D%3D) | **文案库** | 直接发给AI，作用是AI会根据历史内容推理出更多合格的文案，后期会自动组装调用：<br/>1**、提供历史优质转化主副标题**<br/>**示例：**主标题「回归限定礼包」/副标题「最高648福利金\+1160仙玉起的专属礼包」/按钮「限时领取」<br/>2、**提供企微历史优质推送文案**<br/>**示例：**「🎁你的专属回归礼包已到账 💰价值 1160\+仙玉的福利 ⏰仅48小时内有效 回游戏速领👇」 |
| 视频库文件夹<br/>（让AI来创建文件夹） | 圈子沉浸流插屏广告/短剧沉浸流插屏广告 这两个资源位配置会在此调用视频素材（如果指定素材，可以复制本地链接告诉AI："E:\\工作\\AI 生产文件\\06-AI参考素材\\视频库\\测试视频.mp4"） | 游戏icon图 | 大神部分资源位默认需要<br/>示例：<br/>![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F27%2F8b10aee552e245479c38dd71f2dec5a3.png&code=dHliNjR1c3RfMTc4NzkwOTI4NDE1OQ%3D%3D) |

×每个游戏可能配置项有所不同，可以通过自然语言把明确需求告诉AI修改。

**支持的资源位类型（主流的北斗平台广告资源基本都支持）：**

| campass资源位 | 尺寸 | flowx映射 | cmd |
| --- | --- | --- | --- |
| 动态流分发条 | 249\*183 | 动态流分发条 | cmd\_gl\_ad\_FEED\_STREAM\_DISTRIBUTION\_BAR |
| 圈子日历H5模板 | 1029\*579 | 顶部Banner/顶部Banner无文案 | cmd\_gl\_ad\_SQUARE\_CALENDAR\_H5\_TEMP |
| 单图 | 690\*188 | 大神-内容流-单图\(大\) | cmd\_gl\_ad\_SINGLE\_IMAGE |
| 双图 | 168\*94 | 大神广告-资源位-双图 | cmd\_gl\_ad\_DOUBLE\_IMAGE |
| 双列流广告位 | 543\*720 | 大神APP-双列流-首图 | cmd\_gl\_ad\_DOUBLE\_COLUMN\_STREAM\_AD |
| 存量攻略百科-双图 | 668\*375 | 圈子-存量攻略百科-双图 | cmd\_gl\_ad\_GAME\_GUIDE\_DOUBLE\_IMG |
| 存量攻略百科-三图 | 327\*435 | 圈子-存量攻略百科-三图 | cmd\_gl\_ad\_GAME\_GUIDE\_THREE\_IMG |
| 存量攻略百科-四图 | 240\*240 | 圈子-存量攻略百科-四图 | cmd\_gl\_ad\_GAME\_GUIDE\_FOUR\_IMG |
| 玩必备2.0-活动列表 | 1200\*896 | 圈子-玩必备2.0-活动列表 | cmd\_gl\_ad\_PLAYER\_ESSENTIAL\_V2\_ACTIVITY\_LIST |
| 视频化首页-banner | 1029\*180 | 圈子-视频化首页-banner | cmd\_gl\_ad\_WIDGET\_VIDEO\_HOME\_BANNER |
| 圈子启动弹窗 | 580\*870 | 大神启动弹窗 | cmd\_gl\_ad\_GAME\_START\_ALERT |
| 圈子沉浸流插屏广告 | 1110×477 | 插屏广告资源位 | cmd\_gl\_ad\_GAME\_INTERSTITIAL |
| 游戏tab启动弹窗 | 580\*870 | 游戏tab启动弹窗 | cmd\_gl\_ad\_START\_ALERT |
| 短剧沉浸流插屏广告 | 1110×477 | 插屏广告资源位 | cmd\_gl\_ad\_SHORT\_DRAMA\_IMMERSIVE\_INTERSTITIAL |

##### **已知问题：**

（1）大神的广告AI配置后，广告所属游戏和广告投放频道，点击下一步会报错，人工重新选择对应游戏即可，这个问题预计在0910版本中修复。

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F27%2Ff3709b4ddd57450c8085c5443166c6d1.png&code=aTBsYzVjemhfMTc4NzkwOTI4NDE2MA%3D%3D)

（2）提示无 ffprobe

 ffprobe作用：上传音频/视频时用 ffprobe 探测元数据（宽/高/时长/mimeType），填北斗素材 schema 要求的 MediaInfo 字段

手动下载链接：[https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip)

线下安装包：

[ffmpeg-9.0.1-essentials_build.zip](https://office.netease.com/api/pub/file/download?path=e6b7e986d86b44af93f5d2cbe5eb8ae7&type=attachment&identity=538be4c3c11e45ea86796bb8e9cf7562&fileName=ffmpeg-9.0.1-essentials_build.zip&code=b250MWJ1MmpfMTc4NzkwOTI4NDE2MA%3D%3D)

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F28%2Fe70a2f84f79d40e2a10467bf6a828b31.png&code=MTBzcWY0a2tfMTc4NzkwOTI4NDE2MA%3D%3D)

---

### 开始使用：

#### **【4】开始使用**

**恭喜你，后续基本可以通过自然语言指令AI来完成各类策略****（看个人习惯，以下作为参考）**

##### （1）指令方式：渠道\+人群\+频次\+策略类型（关键要跟AI讲明白需求即可）

**示例：『**企微渠道给15-30天用户推送单次策略』 或者 『企微渠道给15-30天用户推送周期策略』，也可以一次性让AI完成很多策略，**『**企微渠道给15-30天/30-60、60-90、90-180、180-365天用户推送单次策略』

> 备注：单次策略，默认根据配置时间向后延\+1h小时发布，周期为此刻\+1h至3日后19：00结束 （还是单次但会留出足够的冗余）
>
> 周期策略，默认周期为7天，默认根据配置时间向后延\+1h小时发布。

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F18%2F2b73a5dfec4e49deb31fcac8d9be4641.png&code=bGhnam1qOXZfMTc4NzkwOTI4NDE2MQ%3D%3D)

> 当然还有许多细节默认设定，比如如果今天或者一次性要AI完成多条策略生成和下发，AI在KV库会避免重复使用同一个，理论上一天只会被调取一次。更多细节设定有很多（也支持个人魔改），迭代太多版本我有些失忆了。

##### （2）任务清单

每天执行了多少任务，素材、配置完成情况等等

位置：E:\\工作\\AI 生产文件\\03-文档报告\\投放任务

##### （3）定制化配置魔改

前面的基建配置ok后，后面可以根据不同游戏和业务板块进行配置个性化的魔改

举个例子：

对于【短剧沉浸流插屏广告】特殊资源位，可以告诉AI

> 【短剧沉浸流插屏广告】投放策略类型默认：流失召回/CPS下载
>
> 素材类型默认：视频
>
> 主体名称默认：梦幻西游手游
>
> 主体icon默认：梦手游戏icon（初始化配置时候提供，后更新可以告诉AI）
>
> 组件描述文案默认：经典回合制手游
>
> 按钮文案：4个字符或者默认立即领取（会根据之前的运营文案库来自动生成）

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F28%2F33c1d3f034cd405cb139c05a56495279.png&code=Z2E0emN5ODFfMTc4NzkwOTI4NDE2MQ%3D%3D)

![图片](https://office.netease.com/api/pub/file/download?path=popo%2F2026%2F08%2F28%2F9f877170fc6e4736828745744125ef1a.png&code=cnYwZHlxNXZfMTc4NzkwOTI4NDE2MQ%3D%3D)