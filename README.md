# 中国行政区数据-省市县数据

------

## 使用说明

有两种数据格式文件会被生成,使用对应的命令自动生成一个json文件
> npm run multi

```
    //Multilevel
    [
        {
            codeId: 0,
            name: '',
            children: [
                codeId: 0,
                name: '',
                children: []
            ]
        }
    ]
```
> npm run single
```
    //Single
    [
        {
            codeId: 0,
            name: '',
            parentId: -1
        },
        {
            codeId: 0,
            name: '',
            parentId: -1
        }
    ]
```

