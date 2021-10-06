import { parse } from "url";


export class Utils {
    public static getBasePath(url: string | undefined): string{
        if (url) {
            let parsedUrl = parse(url)
            let basePath = parsedUrl!.pathname!.split('/')[1]    
            return basePath
        } else {
            return ''
        }
        
        
    }
}