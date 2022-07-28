import { Request } from "../../structures/request";
import { terminal } from "../../structures/terminal";
export default new Request({
    path:'/telegram/send',
    method:'post',
    run: async (req,res) => {
        try {
            res.status(200).send('Message Sent!')
            terminal.connect(req,res);
            
        } catch (error) {
            res.status(500).send('Error Sending Message!')
        }
        
    }
})