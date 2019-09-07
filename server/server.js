var express=require('express');
var app=express();
var mongoose=require('mongoose');
var crypto=require('crypto');
var parser=require('body-parser');
var jwt=require('jsonwebtoken')

//定义集合
var a=mongoose.model('users',{
    email:String,
    pwd:String,
    user:String
})
//cros解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');   
    next();
})
//路由  链接数据库
//注册
app.get('/zhuce',function(req,res){
    //获取数据
    var email=req.query.email;
    var pwd=req.query.pwd;
    var user=req.query.user;
    var newPwd=crypto.createHash('md5').update(pwd).digest('hex');
    //链接数据库
    mongoose.connect('mongodb://localhost:27017/kn',{useNewUrlParser:true},function(err){
        if(err){
            res.send('数据库连接失败')
        }else{
            a.find({email:email,pwd:newPwd}).then((ok)=>{
                if(ok.length==0){
                    // 定义数据
                    var usera=new a({
                        email,
                        pwd:newPwd,
                        user
                    })
                    //存数据
                    usera.save().then((ok)=>{
                        res.send({msg:'数据存储成功',status:200,linkid:1});
                    })
                }else{
                    res.send({msg:'数据存储成功',status:300,linkid:0});
                }
            })
        }
    })
})


//登录
var body=parser.urlencoded({extended:false});
app.post('/denglu',body,function(req,res){
    var email=req.body.email;
    var pwd=req.body.pwd;
    var newPwd=crypto.createHash('md5').update(pwd).digest('hex');
    console.log(email+'   '+pwd)
    mongoose.connect('mongodb://localhost:27017/kn',{useNewUrlParser:true},function(err){
        if(err){
            res.send('数据库连接失败');
        }else{
                a.find({email:email,pwd:newPwd}).then((ok)=>{
                if(ok.length>0){
                // 定义taken参数
                    var obj={
                        ook:true,
                        email:email
                    }
                   var mm='sxdcfgvh456788rtgh5678';
                //进行加密
                    var token=jwt.sign(obj,mm);
                // 向前台返回数据
                    res.send({token:token,mes:'用户登录成功',linkid:3});
                }else{
                    res.send({linkid:4});
                }
            })
        }
    })
})

app.get('/tok',function(req,res){
    var mm='sxdcfgvh456788rtgh5678';
    jwt.verify(req.query.token,mm,function(err,data){
        if(data){
            console.log(data)
            res.send(data);
        }else{
            res.send('传输错误')
        }
    })
})
app.listen(9000)