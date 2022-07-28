import { Request } from "../../structures/request";
import { terminal } from "../../structures/terminal";

export default new Request({
    path:'/about',
    method:'get',
    run: async (req,res) => {
        res.status(200).json({
            "hello":"world",
            "madeBy":"Akoumianakis Manos|Proso",
            "version":"1.2.1"
        });
        terminal.connect(req,res);
    }
})