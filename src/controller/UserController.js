const { response } = require("express")
const { v4: uuid } = require("uuid")
const User = require("../models/User")

module.exports = {
    async index(request, response){
        try{
            const users = await User.find()
            return response.status(200).json({ users })
        } catch(err) {
            response.status(500).json({ error: err.message})
        }
    },

    async store(request, response) {
        const { name, mail, password } = request.body

        if(!name || !mail || !password){
            return response.status(400).json({ error: "Missing name, mail or password"})
        }

        const user = new User({
            _id: uuid(),
            name, 
            mail, 
            password
        })

        try {
            await user.save()
            return response.status(201).json({message: "Users added succesfully!"})
        } catch (err) {
            return response.status(400).json({ error: err.message})
        }
    },

    async update(request, response){
        const { name, mail, password } = request.body

        if(!name && !mail && !password){
            return response.status(400).json({error:"You must inform a new name, email or password"})
        }

        if(name) response.user.name = name
        if(mail) response.user.mail = mail
        if(password) response.user.password = password

        try{
            await response.user.save()
            return response.status(200).json({message: "User updated succesufully"})
        }catch(err){
            response.status(500).json({ Error: err.message })
        }
    },

    async delete(request, response){
        try{
            await response.user.remove()
            return response.status(200).json({message: "User deleted succesufully"})
        }catch(err){
            return response.status(500).json({error: err.message})
        }

    },
}