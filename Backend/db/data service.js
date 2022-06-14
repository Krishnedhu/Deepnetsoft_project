const userSchema = require ('./User')
const register = (name,email,password,place) => {
    return userSchema.User.findOne({email})
    .then (user =>{
        if(user){
            return{
                statusCode: 422,
                status: false,
                message: "User Already exists!!!! Please Log In"
            }
        }
        else{
            const newUser = new userSchema.User({
                name,
                email,
                password,
                place
            })
            newUser.save()
            return{
                statusCode: 200,
                status: true,
                message: "Registered Successfully!!!!"
            }
        }
    })
}

module.exports ={
    register
}