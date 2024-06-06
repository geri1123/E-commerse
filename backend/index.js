const port = 4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());


//Database connection with mongoDB
mongoose.connect("mongodb+srv://greatstackdev:07070707@cluster0.2z4qztk.mongodb.net/e-commerse");


//API Creation
app.get("/" ,(req , res)=>{
    res.send("Express App is Running")
})

//schema for creating products
const Product=mongoose.model("Product" , {
    id:{
        type:Number,
        required:true,

    },
    name:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async (req , res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    } else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API FOR DELETING PRODUCTS
app.post('/removeproduct',async (req , res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating API for getting all products
app.get('/allproducts' , async(req , res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

//creating endpoint for new newcolection data
app.get('/newcollections' , async(req , res)=>{
    let products=await Product.find({});
    let newcollections=products.slice(1).slice(-8);
    console.log('new collection fetch');
    res.send(newcollections);
})

//create one endpoin for popular in women section
app.get('/popularinwomen' , async(req , res)=>{

    let products=await Product.find({category:"women"});
    let popular_in_women=products.slice(0 , 4);
    console.log("popular in woman fetch");
    res.send(popular_in_women);

})

app.listen(port ,(error)=>{
    if(!error){
        console.log("Server running in port"+port)
    } else{
        console.log("error:"+error)
    }
})

//Image storage Engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req , file , cb)=>{
        return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})


//Creating Upload endpoint for Images
app.use('/images' , express.static('upload/images'))
app.post("/upload" , upload.single('product'), (req , res)=>{
          res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
          })  
})