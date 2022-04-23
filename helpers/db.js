import mongoose from 'mongoose'



const DB = () => {

    if (mongoose.connection.readyState[0]) {
        console.log('already connected');
    }else{

        mongoose.connect('mongodb://127.0.0.1:27017/shopping',{
        }).then(
            
            ()=>{
                console.log('connectec')
            }
            )
        }
    }

    export default DB